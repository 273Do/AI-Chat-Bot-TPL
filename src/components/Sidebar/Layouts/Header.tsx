import React from "react";

import { Bot, ChevronsUpDown, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import CreateRoomComponent from "@/components/Sidebar/Layouts/CreateRoomComponent";

// サイドバーのヘッダー
const Header = () => {
  const roomMode = useAppSelector((state: RootState) => state.roomMode.mode);

  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          {roomMode === 2 ? (
            <SidebarMenuButton>
              <Bot />
              ChatBot
            </SidebarMenuButton>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Bot />
                  ChatBot
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" className="w-44">
                <DropdownMenuItem asChild>
                  <CreateRoomComponent />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2 />
                  <p>ルームを全削除</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};

export default Header;
