import React from "react";

import { EllipsisVertical } from "lucide-react";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import DeleteRoom from "./Layouts/DeleteRoom";
import EditRoom from "./Layouts/EditRoom";
import { RoomsType } from "./type";

// ルーム横のアイコンをクリックすると表示される編集メニュー
const EditMenu = (room_info: RoomsType) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent p-0 opacity-50 hover:bg-transparent hover:opacity-100">
          <EllipsisVertical size={16} className="text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start">
        <DropdownMenuItem asChild>
          <EditRoom {...room_info} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteRoom {...room_info} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditMenu;
