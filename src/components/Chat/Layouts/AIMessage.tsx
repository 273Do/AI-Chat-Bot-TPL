import React from "react";

import {
  SiAnthropic,
  SiGooglegemini,
  SiOpenai,
} from "@icons-pack/react-simple-icons";

import { MessageType } from "@/components/demo-messages-type";

const AIMessage = (msgData: MessageType) => {
  const border_color =
    msgData.AIModel === "GPT"
      ? "border-gpt bg-gptsecondary"
      : msgData.AIModel === "Gemini"
      ? "border-gemini bg-geminisecondary"
      : "border-claude bg-claudesecondary";

  const ai_icon =
    msgData.AIModel === "GPT" ? (
      <SiOpenai />
    ) : msgData.AIModel === "Gemini" ? (
      <SiGooglegemini />
    ) : (
      <SiAnthropic />
    );

  return (
    <>
      <div
        className={`flex size-10 items-center justify-center rounded-full border p-2 text-white ${border_color}`}
      >
        {ai_icon}
      </div>
      <div className="ml-2 flex w-full items-end justify-start gap-1">
        <div className="max-w-[550px] rounded-lg border border-primary p-2 text-primary">
          <p>{msgData.message}</p>
        </div>
        <p className="text-xs">{msgData.timestamp.split(" ")[1].slice(0, 5)}</p>
      </div>
    </>
  );
};

export default AIMessage;
