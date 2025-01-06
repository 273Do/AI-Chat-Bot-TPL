import React from "react";

import { Calendar, MessageSquare, MessageSquareQuote } from "lucide-react";

import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import HoverEdit from "./HoverEdit";
import { RoomsType } from "./type";

// defaultモード時のルーム表示コンポーネント
const Room = ({ room }: RoomsType) => {
  return (
    <>
      <SidebarMenuSubItem className="flex w-full cursor-pointer items-center justify-between">
        <SidebarMenuSubButton className="w-full" asChild>
          <a>
            {room.mode === "default" ? (
              <MessageSquare size={16} />
            ) : room.mode === "diary" ? (
              <Calendar size={16} />
            ) : (
              <MessageSquareQuote size={16} />
            )}
            <span>{room.roomName}</span>
          </a>
        </SidebarMenuSubButton>
        <HoverEdit />
      </SidebarMenuSubItem>
    </>
  );
};

export default Room;
