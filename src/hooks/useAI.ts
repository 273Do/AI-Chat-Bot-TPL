import useSendMessage from "./useSendMessage";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { errorToast } from "@/components/Toast/toast";
import { fetchGeminiResponse } from "@/functions/fetchAIRes/fetchGeminiResponse";
import { fetchOpenAIResponse } from "@/functions/fetchAIRes/fetchOpenAIResponse";
import GoogleDocsPublicContent from "@/functions/fetchPrompt";

// AIのレスポンスを返すカスタムフック
const useAI = () => {
  // メッセージ送信処理を行うカスタムフック
  const { sendMessage, updateMessage, deleteMessage } = useSendMessage();

  // 選択したLLMのIDを取得
  const selectedLLMId = useAppSelector(
    (state: RootState) => state.LLMSetting.llm_id
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
      const { success, prompt } = await GoogleDocsPublicContent();

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
        } else {
          // Claudeのレスポンスを取得
          // res = await fetchOpenAIResponse(input, _contents);
        }

        console.log("contents", res);
        return res;
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "不明なエラーが発生しました。";
      // deleteMessage(messageDocId);

      // 失敗した場合はメッセージを更新
      await updateMessage(String(error), messageDocId);
      errorToast("エラー", errorMessage);
    }
  };

  return { createAIMessage, updateAIMessage, fetchAIResponse };
};

export default useAI;
