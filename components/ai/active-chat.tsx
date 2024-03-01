
"use client"

import * as React from "react"

import { useChat, type Message } from 'ai/react'


import { type ChatProps } from "./chat"
import { useSearchParams } from "next/navigation"

import { Chat } from "@/components/ai/chat" 
import { Suspense } from 'react'

export function ActiveChat({ messages }: ChatProps ) {

    const searchParams = useSearchParams()
 
    const chatId = searchParams.get('id')
    return (
        <>
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold">Home</code>
                    </p>
                    <div className="fixed bottom-2 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-12 lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center lg:pointer-events-auto lg:p-0"
                        href="https://github.com/RocketsGraphQL/rgraph"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        {/* <Image
                        src="/RGQL.png"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                        /> */}
                        Rocketgraph
                    </a>
                    </div>
                </div>
                <Chat chatId={chatId} />
        </>

    )
}

