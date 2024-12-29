import React from "react";

import { SidebarTrigger } from "@/components/ui/sidebar";

// チャット画面のヘッダー
const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12">
        <SidebarTrigger />
        Header
      </div>
    </div>
  );
};

export default Header;
