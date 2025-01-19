import React, { useState } from "react";

import { ArrowUp } from "lucide-react";

import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

import { GoogleDocsPublicContent } from "@/functions/fetchPrompt";
import useSendMessage from "@/hooks/useSendMessage";

// チャット入力コンポーネント
const InputArea = () => {
  const [input, setInput] = useState<string>("");
  const [isTextareaActive, setIsTextareaActive] = useState<boolean>(true);

  // メッセージ送信処理
  const { sendMessage } = useSendMessage();

  // 送信ボタンを押した時の処理
  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    // 送信処理
    await sendMessage(input, "");
    // テキストエリアを初期化
    setInput("");

    // AIのレスポンスがあるまでテキストエリアを無効化
    setIsTextareaActive(false);
    // DEBUG: デモとして5秒待機
    await new Promise((resolve) => setTimeout(resolve, 5000)).then(() =>
      setIsTextareaActive(true)
    );
  };

  return (
    <div className="mb-7 flex size-full items-end justify-center text-center text-xl">
      <div className="flex w-[400px] items-end">
        <Textarea
          // placeholder="メッセージを送信する"
          className="resize-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!isTextareaActive}
        />
        <Button
          className="ml-2 p-3"
          disabled={!input.match(/\S/g)}
          onClick={handleClick}
        >
          <ArrowUp size={16} strokeWidth={3} />
        </Button>
        <Button onClick={() => GoogleDocsPublicContent()}>
          プロンプト確認
        </Button>
      </div>
    </div>
  );
};

export default InputArea;
