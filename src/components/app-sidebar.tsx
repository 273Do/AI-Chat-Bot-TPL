import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import * as SB from "@/components/Sidebar/index";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SB.Header />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SB.ModeDefault />
            </SidebarMenu>
            <SidebarSeparator />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SB.Footer />
      <SidebarRail />
    </Sidebar>
  );
}
