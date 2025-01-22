import React from "react";

import { Bot, ChevronsUpDown } from "lucide-react";

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

import DeleteALlRooms from "./DeleteAllRooms";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import CreateRoom from "@/components/Sidebar/Layouts/CreateRoom";

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
                  <CreateRoom />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <DeleteALlRooms />
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
