import "./App.css";
import { useEffect } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import ChatScreen from "./components/Chat/ChatScreen";
import Login from "./components/Login/Login";
import { login, logout } from "./features/UserSlice";
import { auth } from "./firebase/firebase";

import { AppSidebar } from "@/components/Sidebar/app-sidebar";

//メインコンポーネント
function App() {
  // const user = null;
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  // ユーザーのログイン状態を監視
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photURL: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
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
