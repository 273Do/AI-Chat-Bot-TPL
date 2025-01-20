import React, { useState } from "react";

import { ArrowUp } from "lucide-react";

import { errorToast } from "../Toast/toast";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

import useAI from "@/hooks/useAI";
import useSendMessage from "@/hooks/useSendMessage";

// チャット入力コンポーネント
const InputArea = () => {
  const [input, setInput] = useState<string>("");
  const [isTextareaActive, setIsTextareaActive] = useState<boolean>(true);

  // メッセージ送信処理を行うカスタムフック
  const { sendMessage } = useSendMessage();

  // AIのレスポンスを取得するカスタムフック
  const { createAIMessage, updateAIMessage, fetchAIResponse } = useAI();

  // 送信ボタンを押した時の処理
  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    // 送信処理
    await sendMessage(input, null);
    // テキストエリアを初期化
    setInput("");

    // AIのレスポンスがあるまでテキストエリアを無効化
    setIsTextareaActive(false);

    // AIのメッセージを作成
    const messageDocId = await createAIMessage();

    // AIのレスポンスを取得
    const AIResponse = await fetchAIResponse(input);

    if (messageDocId && AIResponse) {
      // AIのメッセージを更新
      await updateAIMessage(messageDocId, AIResponse);
    } else {
      errorToast("エラー", "AIのレスポンスが取得できませんでした。");
    }

    // テキストエリアを有効化
    setIsTextareaActive(true);
  };

  const test = async () => {
    console.log("test");
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

        <Button onClick={() => test()}>AI</Button>
      </div>
    </div>
  );
};

export default InputArea;
