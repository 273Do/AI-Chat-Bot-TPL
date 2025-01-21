import OpenAI from "openai";

// OpenAIの初期化
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // 注意: ブラウザでの使用を許可
});

// モデルの指定
const model = "gpt-4";

// OpenAIのレスポンスを取得する関数
export const fetchOpenAIResponse = async (input: string, prompt: string) => {
  // プロンプトとチャットの入力を用いてAIのレスポンスを取得
  const response = await openai.chat.completions.create({
    model,
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: input },
    ],
  });

  // レスポンス結果を取得
  const result = response.choices[0].message.content;

  return String(result);
};
