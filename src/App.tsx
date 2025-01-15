import "./App.css";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { SidebarProvider } from "@/components/ui/sidebar";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import ChatScreen from "./components/Chat/ChatScreen";
import Login from "./components/Login/Login";
import { errorToast, successToast } from "./components/Toast/toast";
import { resetRoomInfo } from "./features/RoomSlice";
import { login, logout } from "./features/UserSlice";
import { auth } from "./firebase/firebase";

import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import fetchUserDocId from "@/functions/fetchUserDocId";

//メインコンポーネント
function App() {
  // const user = null;
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  // ユーザーのログイン状態を監視
  // レンダリング時に一度だけ実行
  useEffect(() => {
    // 以前のonAuthStateChangedの書き方
    // auth.onAuthStateChanged((loginUser) => {});

    // 最新のonAuthStateChangedの書き方
    // ログイン状態が変わるたびにコールバック(中の処理)が呼び出される
    onAuthStateChanged(auth, async (loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        try {
          // 非同期でログインしているユーザのドキュメントIDを取得
          const userDocId = await fetchUserDocId(loginUser.uid);
          console.log(userDocId);

          // ユーザー情報をReduxに保存
          dispatch(
            login({
              uid: loginUser.uid,
              photURL: loginUser.photoURL,
              email: loginUser.email,
              displayName: loginUser.displayName,
              userDocId: userDocId,
            })
          );

          successToast(
            loginUser.providerData[0].providerId.replace(".com", ""),
            "ログインしました。"
          );
        } catch (err) {
          // ユーザーのドキュメントID取得時のエラー処理
          dispatch(logout());
          dispatch(resetRoomInfo());
          errorToast("ログインエラー", (err as Error).message);
        }
      } else {
        // ログアウト時
        dispatch(logout());
        dispatch(resetRoomInfo());
      }
    });
  }, [dispatch]);

  return (
    <>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <main className="w-full">{user ? <ChatScreen /> : <Login />}</main>
      </SidebarProvider>
    </>
  );
}

export default App;
