import { GoogleGenerativeAI } from "@google/generative-ai";

// Geminiの初期化
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_API_KEY);

// モデルの指定
const model = genAI.getGenerativeModel({
  model: import.meta.env.VITE_APP_GEMINI_MODEL,
});

// Geminiのレスポンスを取得する関数
export const fetchGeminiResponse = async (input: string, prompt: string) => {
  const request =
    "こちらの指示に従って回答してください。：" + prompt + "\n入力：" + input;

  // プロンプトとチャットの入力を用いてAIのレスポンスを取得
  const response = await model.generateContent(request);

  // レスポンス結果を取得
  const result = response.response.text();

  return String(result);
};
