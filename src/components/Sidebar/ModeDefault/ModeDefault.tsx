import React from "react";

import {
  Calendar,
  ChevronRight,
  MessageSquare,
  MessageSquareQuote,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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

// import roomsData from "../../demo-rooms.json";
import Room from "../Room";
import { RoomsType } from "../type";

import groupByDate from "@/functions/formatGroupByDate";

// defaultモード時のサイドバー表示
const ModeDefault = ({
  isOpen,
  rooms,
}: {
  isOpen: boolean;
  rooms: RoomsType[];
}) => {
  //  roomから日付ごとにグループ化し，時間の新しいものを上に表示する
  const groupedByDate = groupByDate(rooms);

  console.log(groupedByDate);

  return (
    <>
      {Object.keys(groupedByDate).map((date) => (
        <Collapsible defaultOpen className="group/collapsible" key={date}>
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              {isOpen === false ? (
                // MEMO: sidebarが閉じているときのみ
                <HoverCard>
                  <HoverCardTrigger>
                    <SidebarMenuButton className="text-xs text-muted-foreground">
                      {groupedByDate[date][0].room.mode === 0 ? (
                        <MessageSquare size={16} />
                      ) : groupedByDate[date][0].room.mode === 2 ? (
                        <Calendar size={16} />
                      ) : (
                        <MessageSquareQuote size={16} />
                      )}
                      {date}
                    </SidebarMenuButton>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-full p-2 text-xs">
                    <p className="text-muted-foreground">{date}</p>
                    <p>Room:{groupedByDate[date].length}</p>
                  </HoverCardContent>
                </HoverCard>
              ) : (
                // MEMO: sidebarが開いているとき
                <SidebarMenuButton className="text-xs text-muted-foreground">
                  <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  {date}
                </SidebarMenuButton>
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {groupedByDate[date].map((room: RoomsType) =>
                  room.room.mode == 1 ? (
                    <TooltipProvider key={room.id}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Room {...room} />
                        </TooltipTrigger>
                        <TooltipContent className="z-50 w-60 p-3 text-xs">
                          <p>{room.room.prompt}</p>
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
