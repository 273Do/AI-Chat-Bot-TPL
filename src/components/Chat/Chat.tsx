import React from "react";

import * as MSG from "./index";

import useMessageCollection from "@/hooks/useMessageCollection";

// チャットコンポーネント
const Chat = () => {
  // ルームのメッセージ情報を取得
  const { messageDocuments: messages } = useMessageCollection();

  // ルームのメッセージ情報を取得

  return (
    <div className="m-2">
      {messages.map((item) => (
        <div key={item.id} className="my-4 flex justify-end">
          {item.message.AIModel === null ? (
            <MSG.UserMessage {...item} />
          ) : (
            <MSG.AIMessage {...item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Chat;
