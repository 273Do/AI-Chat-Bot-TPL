import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";

import * as SB from "./index";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

// サイドバー全体のコンポーネント
export function AppSidebar() {
  const {
    // state,
    open,
    // setOpen,
    // openMobile,
    // setOpenMobile,
    // isMobile,
    // toggleSidebar,
  } = useSidebar();

  const roomMode = useAppSelector((state: RootState) => state.roomMode.mode);

  return (
    <Sidebar collapsible="icon">
      <SB.Header />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {roomMode === 2 ? (
                <SB.ModeDiary isOpen={open} />
              ) : (
                <SB.ModeDefault isOpen={open} />
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SB.Footer />
    </Sidebar>
  );
}
