import useSendMessage from "./useSendMessage";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { errorToast } from "@/components/Toast/toast";
import { fetchClaudeResponse } from "@/functions/fetchAIResponse/fetchClaudeResponse";
import { fetchDeepSeekResponse } from "@/functions/fetchAIResponse/fetchDeepSeekResponse";
import { fetchGeminiResponse } from "@/functions/fetchAIResponse/fetchGeminiResponse";
import { fetchOpenAIResponse } from "@/functions/fetchAIResponse/fetchOpenAIResponse";
import GoogleDocsPublicContent from "@/functions/fetchPrompt";

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
  const fetchAIResponse = async (messageDocId: string, input: string) => {
    try {
      // プロンプトの取得
      const { success, prompt } = await GoogleDocsPublicContent(
        room_prompt ?? ""
      );

      console.log("prompt", prompt);

      if (!success) {
        throw new Error("プロンプトの取得に失敗しました。");
      } else {
        let res: string = "";
        if (selectedLLMId == 0)
          // OpenAIのレスポンスを取得
          res = await fetchOpenAIResponse(input, prompt);
        else if (selectedLLMId == 1) {
          // Geminiのレスポンスを取得
          res = await fetchGeminiResponse(input, prompt);
        } else if (selectedLLMId == 2) {
          // Claudeのレスポンスを取得
          res = await fetchClaudeResponse(input, prompt);
        } else {
          // DeepSeekのレスポンスを取得
          res = await fetchDeepSeekResponse(input, prompt);
        }

        console.log("contents", res);
        return res;
      }
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
