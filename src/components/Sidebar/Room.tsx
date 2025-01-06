import React from "react";

import { Calendar, MessageSquare, MessageSquareQuote } from "lucide-react";

import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import HoverEdit from "./HoverEdit";
import { RoomsType } from "./type";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setRoomInfo } from "@/features/RoomSlice";

// defaultモード時のルーム表示コンポーネント
const Room = ({ id, room }: RoomsType) => {
  const dispatch = useAppDispatch();
  const room_id = useAppSelector((state) => state.room.room_id);

  return (
    <>
      <SidebarMenuSubItem className="flex w-full cursor-pointer items-center justify-between">
        <SidebarMenuSubButton
          className={`w-full ${id === room_id ? "bg-primary/20" : ""}`}
          asChild
          onClick={() =>
            dispatch(
              setRoomInfo({
                room_id: id,
                room_name: room.roomName,
                room_mode: room.mode,
              })
            )
          }
        >
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
