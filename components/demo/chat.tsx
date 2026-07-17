"use client"

import type React from "react"

import { useState } from "react"
import { SendIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "@/components/ui/message"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

type ChatMessage = {
  id: number
  align: "start" | "end"
  text: string
}

const initialMessages: ChatMessage[] = [
  { id: 1, align: "start", text: "Hey! Did you get a chance to look at the new demo?" },
  { id: 2, align: "end", text: "Just opened it — the layout looks great." },
  { id: 3, align: "start", text: "Awesome. Want me to add a chat card too?" },
  { id: 4, align: "end", text: "Yes please, that would round things out nicely." },
]

export function ChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [draft, setDraft] = useState("")

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, align: "end", text },
    ])
    setDraft("")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <Avatar>
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-base">Alex Rivera</CardTitle>
          <span className="text-xs text-muted-foreground">Online</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <MessageGroup>
          {messages.map((message) => (
            <Message key={message.id} align={message.align}>
              {message.align === "start" && (
                <MessageAvatar>
                  <Avatar size="sm">
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                </MessageAvatar>
              )}
              <MessageContent>
                <Bubble
                  align={message.align}
                  variant={message.align === "end" ? "default" : "muted"}
                >
                  <BubbleContent>{message.text}</BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
          ))}
        </MessageGroup>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroupInput
              placeholder="Type a message..."
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              aria-label="Message"
            />
            <InputGroupAddon align="inline-end">
              <Button type="submit" size="icon-sm" disabled={!draft.trim()}>
                <SendIcon />
                <span className="sr-only">Send message</span>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </CardContent>
    </Card>
  )
}
