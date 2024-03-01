'use client'

import { useChat, type Message } from 'ai/react'

// import { ChatHeader } from "@/components/ai/chat-header"
import { ChatInput } from "@/components/ai/chat-input"
import { MessageBox } from "@/components/ai/message-box"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import axios from 'axios'



export interface ChatProps extends React.ComponentProps<'div'> {
    initialMessages?: Message[]
    messages?: Message[]
    id?: string
    chatId?: string | null
}

const uniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function Chat({ id, initialMessages = [], className, chatId }: ChatProps) {

    const [ currentMessage, setCurrentMessage ] = useState('');
    const [ messages, setMessages ] = useState<Message[]>(initialMessages);

    const handleChange = (message: string) => {
        setCurrentMessage(message)
    }

    const sendMessageToAIStudio = async (message: string) => {
        const API_URL = `${process.env.NEXT_PUBLIC_AI_STUDIO_BASE_URL}/query`;
        const response = await axios.post(
          API_URL,
          {
            name: chatId,
            query: message
          }
        );
        if (response.status === 200 && response.data) {
          const { answer } = response.data;
          return answer
        }
      return '';
    }


    const sendMessage = async (message: string) => {
        const newMessage : Message = {
            id: uniqueId(),
            role: 'user',
            content: message
        };
        setMessages(prevMessages => [...prevMessages, newMessage])

        // send message to AI API
        // send message to AI API
        const answer = await sendMessageToAIStudio(message);
        if (answer !== '') {
            const AIMessage : Message = {
                id: uniqueId(),
                role: 'system',
                content: answer
            };
            setMessages(prevMessages => [...prevMessages, AIMessage]);
        }
        setCurrentMessage('')
    }
    return (
      <section className="w-full h-full bg-white dark:bg-transparent">
        <div className="lg:col-span-12 lg:flex">
            <div className='grid w-full gap-2 justify-normal'>
                {/* <ChatHeader /> */}
                <MessageBox messages={messages} />
                <div className='row-span-2'>
                    <ChatInput value={currentMessage} onChangeMessage={handleChange} />
                </div>
                <div className='row-span-2'>
                    <Button onClick={(e) => {currentMessage.trim() != '' && sendMessage(currentMessage)}} className='w-full text-white'>Send message</Button>
                </div>
            </div>
        </div>                
      </section>
    )
}