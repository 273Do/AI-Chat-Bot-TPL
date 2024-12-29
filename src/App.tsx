import "./App.css";
import { SidebarProvider } from "@/components/ui/sidebar";

import ChatScreen from "./components/Chat/ChatScreen";

import { AppSidebar } from "@/components/Sidebar/app-sidebar";

function App() {
  return (
    <>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <main className="w-full">
          <ChatScreen />
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
