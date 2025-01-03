import React from "react";

import { Settings } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import LLMSelect from "./LLMs/LLMSelect";
import RoomSettingSelect from "./RoomSetting/RoomSettingSelect";

// 設定画面コンポーネント
const SettingScreen = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-muted">
        <Settings size={16} />
        設定
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>設定</DialogTitle>
          <DialogDescription>
            使用するLLMやルームモードの設定を行います。
          </DialogDescription>
          <div className="pt-3">
            <LLMSelect />
            <RoomSettingSelect />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SettingScreen;
