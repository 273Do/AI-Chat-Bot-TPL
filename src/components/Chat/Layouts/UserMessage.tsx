import React from "react";

import { MessageType } from "@/components/demo-messages-type";

// ユーザーのメッセージコンポーネント
const UserMessage = (msgData: MessageType) => {
  return (
    <div className="flex items-end gap-1">
      <p className="text-xs">{msgData.timestamp.split(" ")[1].slice(0, 5)}</p>
      <div className="max-w-[400px] rounded-lg bg-primary p-2 text-secondary">
        <p>{msgData.message}</p>
      </div>
    </div>
  );
};

export default UserMessage;
