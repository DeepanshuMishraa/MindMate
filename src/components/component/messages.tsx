"use client"

import React from "react";
import Markdown from "./markdown";
import { Bot, User2 } from "lucide-react";
import { Message } from "ai/react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

type Props = {
  messages: Message[],
  isLoading: boolean
};



const Messages = ({ messages, isLoading }: Props) => {

  const session = useSession();
  return (
    <div
      id="chatbox"
      className="flex flex-col w-full text-left mt-4 gap-4 whitespace-pre-wrap"
    >
      {messages.map((m, index) => {
        return (
          <div
            className={`p-4 shadow-md rounded-md ml-10 relative ${
              m.role === "user" ? "bg-blue-700" : ""
            }`}
          >
            <Markdown text={m.content} />
            {m.role === "user" ? (
              
                           <User2 className="absolute -left-10 top-2 border rounded-full p-1 shadow-lg" />
            ) : (
              <Bot
                className={`absolute top-2 -left-10 border rounded-full p-1 shadow-lg  stroke-[#0842A0] ${
                  isLoading && index === messages.length - 1
                    ? "animate-bounce"
                    : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Messages;