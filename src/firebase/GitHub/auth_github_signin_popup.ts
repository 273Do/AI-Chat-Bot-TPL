import { signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";
import { github_provider } from "./auth_github_provider_create";

// GitHubのポップアップを使ったサインイン
const githubSignInWithPopup = async () => {
  try {
    await signInWithPopup(auth, github_provider);
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message);
    } else {
      alert("An unknown error occurred");
    }
  }
};

export { githubSignInWithPopup };
