import React from "react";

import { ChevronsUpDown, SquarePlus, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
const Header = () => {
  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <p>サービスタイトル</p>
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
    </SidebarMenuItem>
  );
};

export default Header;
