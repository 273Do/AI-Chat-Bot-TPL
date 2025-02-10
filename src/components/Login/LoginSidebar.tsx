import { Bot } from "lucide-react";

import { ThemeToggle } from "../theme-toggle";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

// ログイン画面のサイドバー
const LoginSidebar = () => {
  const serviceName = import.meta.env.VITE_APP_SERVICE_NAME;
  return (
    <>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Bot />
              {serviceName}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="relative flex cursor-default select-none items-center gap-2 rounded-sm  text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            <SidebarMenuButton className="h-11">
              <ThemeToggle />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
};

export default LoginSidebar;
