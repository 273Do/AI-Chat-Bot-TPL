import React, { useState } from "react";

import { ArrowUp } from "lucide-react";

import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

// チャット入力コンポーネント
const InputArea = () => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="mb-7 flex size-full items-end justify-center text-center text-xl">
      <div className="flex w-[400px] items-end">
        <Textarea
          // placeholder="メッセージを送信する"
          className="resize-none"
          // {...field}

          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="ml-2 p-3" disabled={!input.match(/\S/g)}>
          <ArrowUp size={16} strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
};

export default InputArea;
