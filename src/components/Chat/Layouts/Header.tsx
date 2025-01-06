import React from "react";

import { Calendar, MessageSquare, MessageSquareQuote } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { useAppSelector } from "@/app/hooks";

// チャット画面のヘッダー
const Header = () => {
  const roomInfo = useAppSelector((state) => state.room);
  return (
    <div className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-3 flex h-12 items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mx-2 h-6" />
        {/* <MessageSquare size={16} />
         */}
        {roomInfo.room_mode === "default" ? (
          <MessageSquare size={16} />
        ) : roomInfo.room_mode === "diary" ? (
          <Calendar size={16} />
        ) : (
          <MessageSquareQuote size={16} />
        )}
        <p className="ml-2">{roomInfo.room_name}</p>
      </div>
    </div>
  );
};

export default Header;
