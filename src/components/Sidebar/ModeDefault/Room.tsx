import React from "react";

import { Calendar, MessageSquare, MessageSquareShare } from "lucide-react";

import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import HoverEdit from "../HoverEdit";

import { RoomType } from "@/components/demo-data-types";

// defaultモード時のルーム表示コンポーネント
const Room = ({ name, prompt, mode }: RoomType) => {
  return (
    <SidebarMenuSubItem className="cursor-pointer">
      <SidebarMenuSubButton asChild>
        <a>
          {mode === "default" ? (
            <MessageSquare size={16} />
          ) : mode === "diary" ? (
            <Calendar size={16} />
          ) : (
            <MessageSquareShare size={16} />
          )}
          <HoverEdit />
          <span>{name}</span>
        </a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};

export default Room;
