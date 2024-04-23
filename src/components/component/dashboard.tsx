"use client";
import { useChat } from "ai/react";
import {
  Bot,
  Loader,
  Loader2,
  MoreHorizontal,
  Plus,
  Send,
  User2,
  X,
} from "lucide-react";
import Image from "next/image";
import Markdown from "./markdown";
import { ChangeEvent, useState } from "react";
import SelectedImages from "./selectedImages";
import Messages from "./messages";
import InputForm from "./inputForm";

export default function Dashboard() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/genai",
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-12 text-lg">
      <InputForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
      />
                  <Messages messages={messages} isLoading={isLoading} />
    </main>
  );
}