import React from "react";

import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";

import { Button } from "../ui/button";
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
        <Button className="bg-transparent p-0 opacity-50 hover:bg-transparent hover:opacity-100">
          <EllipsisVertical size={16} className="text-muted-foreground" />
        </Button>
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
