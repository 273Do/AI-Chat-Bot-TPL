import React from "react";

import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";

import { SidebarMenuAction } from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// サイドバーをホバーしたときに表示される編集メニュー
const HoverEdit = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuAction>
          <EllipsisVertical size={16} className="ml-1" />
        </SidebarMenuAction>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start">
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <Pencil />
            タイトルを編集
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <Trash2 size={16} />
            ルームを削除
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HoverEdit;
