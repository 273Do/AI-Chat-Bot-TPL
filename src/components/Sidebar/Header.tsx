import React from "react";

import { Bot, ChevronsUpDown, SquarePlus, Trash2 } from "lucide-react";

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
} from "@/components/ui/sidebar";
const Header = () => {
  return (
    <SidebarMenu>
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <Bot />
              サービスタイトル
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            className="w-[--radix-popper-anchor-width]"
          >
            <DropdownMenuItem>
              <SquarePlus />
              <p>新しいルームを作成</p>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 />
              <p>ルームを全削除</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
    </SidebarMenu>
  );
};

export default Header;
