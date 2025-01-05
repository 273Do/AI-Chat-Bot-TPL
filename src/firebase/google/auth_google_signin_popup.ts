import { signInWithPopup } from "firebase/auth";

import { google_provider } from "./auth_google_provider_create";
import { auth } from "../firebase";

import { errorToast } from "@/components/Toast/toast";

// Googleのポップアップを使ったサインイン
const googleSignInWithPopup = async () => {
  try {
    await signInWithPopup(auth, google_provider);
  } catch (err) {
    if (err instanceof Error) {
      errorToast("Googleログイン：エラー", err.message);
    } else {
      errorToast("Googleログイン：エラー", "不明なエラーが発生しました。");
    }
  }
};

export { googleSignInWithPopup };
