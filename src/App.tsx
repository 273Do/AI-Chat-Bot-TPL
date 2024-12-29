import "./App.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

function App() {
  return (
    <>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {/* <h1>Hello, world!</h1> */}
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
