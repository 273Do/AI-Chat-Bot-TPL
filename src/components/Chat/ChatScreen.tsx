import React from "react";

import * as CS from "./index";

// チャット画面全体のコンポーネント
const ChatScreen = () => {
  return (
    <div className="w-full">
      <CS.Header />
      <div className="flex justify-center">
        <div className="flex w-[840px] max-w-6xl flex-col items-center">
          <div className="h-20"></div>
          <div className="flex  w-full flex-col justify-center">
            <div className="h-[1000px] w-full bg-slate-400 text-xl">Chat</div>
          </div>
          <div className="h-20"></div>
        </div>
      </div>
      <CS.Footer />
    </div>
  );
};

export default ChatScreen;
