import { errorToast } from "@/components/Toast/toast";

// Google DocsのURL
const docUrl = import.meta.env.VITE_APP_GOOGLE_DOCS_LINK;

// Google Docsからプロンプトを取得する関数
export const GoogleDocsPublicContent = async () => {
  let success = true;
  let prompt = "";
  try {
    const response = await fetch(docUrl);
    const html = await response.text();

    // HTMLをパース
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // ドキュメントの内容を取得
    prompt = (doc.getElementsByClassName("doc-content")[0] as HTMLElement)
      ?.innerText;
  } catch (error) {
    errorToast("エラー", "プロンプトの取得に失敗しました。");
    success = false;
  }
  return { success, prompt };
};

export default GoogleDocsPublicContent;
