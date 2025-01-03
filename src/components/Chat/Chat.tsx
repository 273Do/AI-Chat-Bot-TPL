import React from "react";

import * as MSG from "./index";
import demoMsgs from "../demos-messages.json";

// チャットコンポーネント
const Chat = () => {
  const messages = demoMsgs;

  return (
    <div className="m-2">
      {messages.map((item) => (
        <div key={item.uuid} className="my-4 flex justify-end">
          {item.AIModel === null ? (
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
