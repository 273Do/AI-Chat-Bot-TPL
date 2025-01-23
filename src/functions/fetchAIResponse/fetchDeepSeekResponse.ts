import OpenAI from "openai";

// MEMO: DeepSeek APIはOpenAIと互換性のあるAPI形式を採用している．
// DeepSeekの初期化
const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: import.meta.env.VITE_APP_DEEPSEEK_API_KEY,
  dangerouslyAllowBrowser: true, // 注意: ブラウザでの使用を許可
});

// モデルの指定
const model = import.meta.env.VITE_APP_DEEPSEEK_MODEL;

// DeepSeekのレスポンスを取得する関数
export const fetchDeepSeekResponse = async (input: string, prompt: string) => {
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
