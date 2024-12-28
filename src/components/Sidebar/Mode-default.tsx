import React from "react";

import { MessageSquare } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { RoomType } from "../demo-data-types";
import roomsData from "../demo-data.json";

const ModeDefault = () => {
  // const roomsData: RoomType[] = roomsData;

  const groupedByDate = roomsData.reduce(
    (acc: { [key: string]: RoomType[] }, item) => {
      const date = item.updated; // 日付でグループ化
      if (!acc[date]) {
        acc[date] = []; // 新しい日付のキーを初期化
      }
      acc[date].push(item); // 同じ日付に追加
      return acc;
    },
    {}
  );

  return (
    <>
      {Object.keys(groupedByDate).map((date) => (
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarMenuItem key={date}>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="text-xs text-muted-foreground">
                <MessageSquare />
                {date}
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {groupedByDate[date].map((room: RoomType) => (
                  <SidebarMenuSubItem key={room.id}>
                    <SidebarMenuSubButton asChild>
                      <a>
                        <span>{room.name}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </>
  );
};

export default ModeDefault;
