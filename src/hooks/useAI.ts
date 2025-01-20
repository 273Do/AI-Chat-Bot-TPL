import useSendMessage from "./useSendMessage";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { errorToast } from "@/components/Toast/toast";
import { fetchOpenAIResponse } from "@/functions/fetchAIRes/fetchOpenAIResponse";
import GoogleDocsPublicContent from "@/functions/fetchPrompt";

// AIのレスポンスを返すカスタムフック
const useAI = () => {
  // メッセージ送信処理を行うカスタムフック
  const { sendMessage, updateMessage } = useSendMessage();

  // 選択したLLMのIDを取得
  const selectedLLMId = useAppSelector(
    (state: RootState) => state.LLMSetting.llm_id
  );

  // AIのメッセージを作成する関数
  const createAIMessage = async () => {
    const messageDocId = await sendMessage("", selectedLLMId);
    return messageDocId;
  };

  // AIのメッセージを更新する関数
  const updateAIMessage = async (messageDocId: string, message: string) => {
    await updateMessage(message, messageDocId);
  };

  // AIのレスポンスを取得する関数
  const fetchAIResponse = async (input: string) => {
    try {
      // プロンプトの取得
      const { success: _success, contents: _contents } =
        await GoogleDocsPublicContent();

      if (!_success) {
        throw new Error("プロンプトの取得に失敗しました。");
      } else {
        let res: string = "";
        if (selectedLLMId == 0)
          // OpenAIのレスポンスを取得
          res = await fetchOpenAIResponse(input, _contents);
        else if (selectedLLMId == 1) {
          // Geminiのレスポンスを取得
          // res = await fetchOpenAIResponse(input, _contents);
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
      errorToast("エラー", errorMessage);
    }
  };

  return { createAIMessage, updateAIMessage, fetchAIResponse };
};

export default useAI;
