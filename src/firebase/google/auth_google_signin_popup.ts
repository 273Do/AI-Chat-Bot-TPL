import { signInWithPopup } from "firebase/auth";

import { google_provider } from "./auth_google_provider_create";
import { auth } from "../firebase";

// Googleのポップアップを使ったサインイン
const googleSignInWithPopup = () =>
  signInWithPopup(auth, google_provider).catch((err) => alert(err.message));

export { googleSignInWithPopup };
