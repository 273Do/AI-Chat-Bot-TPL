import { signInWithPopup } from "firebase/auth";

import { google_provider } from "./auth_google_provider_create";
import { auth } from "../firebase";

// Googleのポップアップを使ったサインイン
const googleSignInWithPopup = async () => {
  try {
    await signInWithPopup(auth, google_provider);
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message);
    } else {
      alert("An unknown error occurred");
    }
  }
};

export { googleSignInWithPopup };
