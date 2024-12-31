import React from "react";

import InputArea from "../inputArea";

// チャット画面のフッター
const Footer = () => {
  return (
    // <div className="fixed bottom-0 z-50 rounded-t-lg border border-sidebar-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    // <div className="fixed bottom-0 z-50 border-t border-sidebar-border bg-sidebar">
    <div className="fixed bottom-0 z-50 rounded-t-lg border border-sidebar-border bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/60">
      <div className="flex h-28 w-[800px] max-w-6xl items-center justify-center">
        <InputArea />
      </div>
    </div>
  );
};

export default Footer;
