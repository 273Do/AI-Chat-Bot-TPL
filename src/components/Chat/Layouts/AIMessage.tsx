import React from "react";

import { MessageType } from "@/components/demo-messages-type";

const AIMessage = (msgData: MessageType) => {
  return (
    <div className="flex w-full items-end justify-start gap-2">
      <div className="size-10 rounded-full bg-secondary"></div>
      <div className="max-w-[550px] rounded-lg border border-primary p-2 text-primary">
        <p>{msgData.message}</p>
      </div>
      <p>{msgData.timestamp.split(" ")[1].slice(0, 5)}</p>
    </div>
  );
};

export default AIMessage;
