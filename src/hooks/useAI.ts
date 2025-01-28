import useSendMessage from "./useSendMessage";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { errorToast } from "@/components/Toast/toast";
// import GoogleDocsPublicContent from "@/functions/fetchPrompt";

// LLMのリスト
const llm_list = ["openai", "gemini", "claude", "deepseek"];

// AIのレスポンスを返すカスタムフック
const useAI = () => {
  // メッセージ送信処理を行うカスタムフック
  const { sendMessage, updateMessage, deleteMessage } = useSendMessage();

  // 選択したLLMのIDを取得
  const selectedLLMId = useAppSelector(
    (state: RootState) => state.LLMSetting.llm_id
  );

  // 選択中のルームのプロンプトを取得
  const room_prompt = useAppSelector(
    (state: RootState) => state.room.room_prompt
  );

  // AIのメッセージを作成する関数
  const createAIMessage = async () => {
    const messageDocId = await sendMessage("", selectedLLMId);
    return String(messageDocId);
  };

  // AIのメッセージを更新する関数
  const updateAIMessage = async (messageDocId: string, message: string) => {
    await updateMessage(message, messageDocId);
  };

  // AIのレスポンスを取得する関数
  const fetchAIResponse = async (input: string) => {
    try {
      // プロンプトの取得
      // const { success, prompt } = await GoogleDocsPublicContent(
      //   room_prompt ?? ""
      // );

      // if (!room_prompt) {
      //   throw new Error("プロンプトが取得できませんでした。");
      //   return;
      // } else {
      console.log("prompt", prompt);

      const res = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/${llm_list[selectedLLMId]}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input,
            room_prompt,
          }),
        }
      );

      const result = await res.json();
      const ai_msg = result.message;

      console.log("contents", ai_msg);
      return ai_msg;
      // }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "不明なエラーが発生しました。";
      // deleteMessage(messageDocId);

      errorToast("エラー", errorMessage);
    }
  };

  return { createAIMessage, updateAIMessage, fetchAIResponse };
};

export default useAI;
