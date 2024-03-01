

import { Textarea } from "@/components/ui/textarea"
import { Dispatch, SetStateAction } from "react"

// type: Dispatch<SetStateAction<string>>

export function ChatInput({onChangeMessage, value}: any) {
  console.log("onchange", onChangeMessage);
  return <Textarea value={value} className="h-20 text-black" placeholder="Type your message here." onChange={(e) => {onChangeMessage(e.target.value)}}/>
}