import React from "react";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { RoomType } from "../../demo-data-types";
import roomsData from "../../demo-data.json";
import Room from "../Room";

// defaultモード時のサイドバー表示
const ModeDefault = () => {
  // const roomsData: RoomType[] = roomsData;

  const groupedByDate = roomsData
    .slice()
    .reverse()
    .reduce((acc: { [key: string]: RoomType[] }, item) => {
      const date = item.updated; // 日付でグループ化
      if (!acc[date]) {
        acc[date] = []; // 新しい日付のキーを初期化
      }
      acc[date].push(item as RoomType); // 同じ日付に追加
      return acc;
    }, {});

  return (
    <>
      {Object.keys(groupedByDate).map((date) => (
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarMenuItem key={date}>
            <CollapsibleTrigger asChild>
              {/* MEMO: sidebarが閉じているときのみ */}
              {/* <HoverCard>
                <HoverCardTrigger>
                  <SidebarMenuButton className="text-xs text-muted-foreground">
                    <MessageSquare size={16} />
                    {date}
                  </SidebarMenuButton>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-3 text-xs">
                  <p className="mb-2 text-muted-foreground">{date}</p>
                  <div>
                    {groupedByDate[date].map((room: RoomType) => (
                      <div key={room.id}>{room.name}</div>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard> */}
              {/* MEMO: sidebarが開いているとき */}
              <SidebarMenuButton className="text-xs text-muted-foreground">
                <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                {date}
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {groupedByDate[date].map((room: RoomType) =>
                  room.prompt ? (
                    <TooltipProvider key={room.id}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Room {...room} />
                        </TooltipTrigger>
                        <TooltipContent className="z-50 w-60 p-3 text-xs">
                          <p>{room.prompt}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <Room {...room} key={room.id} />
                  )
                )}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </>
  );
};

export default ModeDefault;
