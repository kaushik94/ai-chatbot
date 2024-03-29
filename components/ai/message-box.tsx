
"use client"

import * as React from "react"

import { useChat, type Message } from 'ai/react'


import { type ChatProps } from "./chat"

export function MessageBox({ messages, isLoading }: ChatProps ) {

    return (
        <>
            <div className="rounded-md bg-white message-box-height-fix pt-24">
                <div
                    className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col rounded-sm"
                >
                    {
                        messages && messages.map((message) => {
                            return (
                                <div className="grid grid-cols-12 p-2" key={message.id}>
                                    <div className={`${message.role == 'user' ? 'col-start-3' : ''} col-span-10`}>
                                        <div className={`${message.role == 'user' ?  'bg-black text-white' : 'bg-accent text-black'} p-4 rounded-md whitespace-pre-wrap`}>
                                            {message.content}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {isLoading && (
                        // Loading skeleton
                        <div className="animate-pulse">
                            <div className="grid grid-cols-12 p-2">
                                <div className="col-span-10"> {/* Adjusted column span */}
                                    <div className="bg-gray-300 p-4 rounded-md h-24" />
                                </div>
                            </div>
                            {/* Add more skeleton items as needed */}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

