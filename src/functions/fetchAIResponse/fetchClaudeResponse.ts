import Anthropic from "@anthropic-ai/sdk";

// Claudeの初期化
const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_APP_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true, // 注意: ブラウザでの使用を許可
});

// モデルの指定
const model = import.meta.env.VITE_APP_CLAUDE_MODEL;

// Claudeのレスポンスを取得する関数
export const fetchClaudeResponse = async (input: string, prompt: string) => {
  const request =
    "こちらの指示に従って回答してください。：" + prompt + "\n入力：" + input;

  // プロンプトとチャットの入力を用いてAIのレスポンスを取得
  const response = await anthropic.messages.create({
    model,
    max_tokens: 1024,
    messages: [{ role: "user", content: request }],
  });

  // レスポンス結果を取得
  const result =
    response.content[0].type === "text" ? response.content[0].text : "";

  console.log("response", result);

  return String(result);
};
