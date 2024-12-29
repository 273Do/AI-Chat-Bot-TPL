import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";

import * as SB from "@/components/Sidebar/index";

// サイドバーのコンポーネント
export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  console.log(open);

  return (
    <Sidebar collapsible="icon">
      <SB.Header />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SB.ModeDefault />
              {/* <SB.ModeDiary /> */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SB.Footer />
    </Sidebar>
  );
}
