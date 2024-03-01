'use client'

import { Chat } from "@/components/ai/chat";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'

import { ActiveChat } from "@/components/ai/active-chat"
import { Suspense, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons"

export default function Home() {

  const [ isChatShowing, setIsChatShowing ] = useState(true);
  return (
    <main className="p-2 rocketgraph-chatbot-main">
      {
        isChatShowing ?
          <Suspense>
            <ActiveChat />
          </Suspense>
        : <FontAwesomeIcon icon={faCircle} />
      }
    </main>
  );
}
