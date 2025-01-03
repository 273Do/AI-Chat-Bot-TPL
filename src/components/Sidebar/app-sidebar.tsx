import { Sidebar } from "@/components/ui/sidebar";

import MainSidebar from "./MainSidebar";
import LoginSidebar from "../Login/LoginSidebar";

import { useAppSelector } from "@/app/hooks";

// サイドバー全体のコンポーネント
export function AppSidebar() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <Sidebar collapsible="icon">
      {user ? <MainSidebar /> : <LoginSidebar />}
    </Sidebar>
  );
}
