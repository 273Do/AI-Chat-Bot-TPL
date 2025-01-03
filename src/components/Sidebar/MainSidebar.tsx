import React from "react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";

import * as SB from "./index";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

// ログイン後のサイドバー全体のコンポーネント
const MainSidebar = () => {
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
    <>
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
    </>
  );
};

export default MainSidebar;
