import React from "react";

import Chat from "./Chat";
import * as CS from "./index";

// チャット画面全体のコンポーネント
const ChatScreen = () => {
  return (
    <div className="w-full">
      <CS.Header />
      <div className="flex justify-center">
        <div className="flex w-[800px] max-w-6xl flex-col items-center">
          <div className="h-16"></div>
          <div className="flex w-full flex-col justify-center">
            <div className="bga-slate-400 size-full">
              <Chat />
            </div>
          </div>
          <div className="h-32"></div>
        </div>
        <CS.Footer />
      </div>
    </div>
  );
};

export default ChatScreen;
