import "./App.css";
import { SidebarProvider } from "@/components/ui/sidebar";

import { useAppSelector } from "./app/hooks";
import ChatScreen from "./components/Chat/ChatScreen";

import { AppSidebar } from "@/components/Sidebar/app-sidebar";

//メインコンポーネント
function App() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <main className="w-full">
          {user ? <ChatScreen /> : <div>ログインしてください</div>}
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
