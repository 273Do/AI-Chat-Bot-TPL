import OpenAI from "openai";

// OpenAIの初期化
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// OpenAIのレスポンスを取得する関数
export const fetchOpenAIResponse = async (input: string, prompt: string) => {
  // プロンプトとチャットの入力を用いてAIのレスポンスを取得

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: input },
    ],
  });

  const response = completion.choices[0].message.content;

  return String(response);
};
