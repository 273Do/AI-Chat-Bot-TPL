import { signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";
import { github_provider } from "./auth_github_provider_create";

// GitHubのポップアップを使ったサインイン
const githubSignInWithPopup = () =>
  signInWithPopup(auth, github_provider).catch((err) => alert(err.message));

export { githubSignInWithPopup };
