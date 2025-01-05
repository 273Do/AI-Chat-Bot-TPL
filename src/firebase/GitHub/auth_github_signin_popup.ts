import { signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";
import { github_provider } from "./auth_github_provider_create";

import { errorToast } from "@/components/Toast/toast";

// GitHubのポップアップを使ったサインイン
const githubSignInWithPopup = async () => {
  try {
    await signInWithPopup(auth, github_provider);
  } catch (err) {
    if (err instanceof Error) {
      errorToast("GitHubログイン：エラー", err.message);
    } else {
      errorToast("GitHubログイン：エラー", "不明なエラーが発生しました。");
    }
  }
};

export { githubSignInWithPopup };
