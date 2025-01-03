import "./App.css";
import { SidebarProvider } from "@/components/ui/sidebar";

import { useAppSelector } from "./app/hooks";
import ChatScreen from "./components/Chat/ChatScreen";
import Login from "./components/Login/Login";

import { AppSidebar } from "@/components/Sidebar/app-sidebar";

//メインコンポーネント
function App() {
  const user = useAppSelector((state) => state.user.user);

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
