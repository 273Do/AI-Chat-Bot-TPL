import React from "react";

import { MessageSquare } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

// チャット画面のヘッダー
const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-3 flex h-12 items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mx-2 h-6" />
        <MessageSquare size={16} />
        <p className="ml-2">Room Title</p>
      </div>
    </div>
  );
};

export default Header;
