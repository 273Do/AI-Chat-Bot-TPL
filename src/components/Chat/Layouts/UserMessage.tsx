import React from "react";

import { MessagesType } from "../type";

// ユーザーのメッセージコンポーネント
const UserMessage = ({ id, message }: MessagesType) => {
  // 時間と分を取得
  const date = message.createdAt.toDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <div className="flex items-end gap-1">
      {/* <p className="text-xs">{message.createdAt.split(" ")[1].slice(0, 5)}</p> */}
      <p className="text-xs">
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}
      </p>
      <div className="max-w-[400px] rounded-lg bg-primary p-2 text-secondary">
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default UserMessage;
