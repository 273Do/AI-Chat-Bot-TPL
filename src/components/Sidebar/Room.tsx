import React from "react";

import { Calendar, MessageSquare, MessageSquareQuote } from "lucide-react";

import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import HoverEdit from "./HoverEdit";

import { RoomType } from "@/components/demo-rooms-types";

// defaultモード時のルーム表示コンポーネント
const Room = ({ name, prompt, mode }: RoomType) => {
  return (
    <>
      <SidebarMenuSubItem className="cursor-pointer">
        <SidebarMenuSubButton asChild>
          <a>
            {mode === "default" ? (
              <MessageSquare size={16} />
            ) : mode === "diary" ? (
              <Calendar size={16} />
            ) : (
              <MessageSquareQuote size={16} />
            )}
            <span>{name}</span>
          </a>
        </SidebarMenuSubButton>
        <HoverEdit />
      </SidebarMenuSubItem>
    </>
  );
};

export default Room;
