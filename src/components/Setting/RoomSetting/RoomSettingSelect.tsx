import React from "react";

import { Calendar, MessageSquare, MessageSquareQuote } from "lucide-react";

import ModeSelectItem from "./SettingItem";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { setRoomMode } from "@/features/RoomModeSlice";

const modes = [
  {
    id: 0,
    title: "デフォルト",
    description: "いつでもチャットルームの作成ができるようになります。",
    icon: <MessageSquare />,
  },
  {
    id: 1,
    title: "プロンプト",
    description:
      "チャットルームごとに追加でプロンプトを設定できるようになります。",
    icon: <MessageSquareQuote />,
  },
  {
    id: 2,
    title: "カレンダー",
    description: "1日にひとつずつチャットルームが作成されるようになります。",
    icon: <Calendar />,
  },
];

const RoomSettingSelect = () => {
  const RoomMode = useAppSelector((state: RootState) => state.roomMode.mode);
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="text-md mt-4 font-bold">ルームモードの設定</p>
      <div className="grid-row-3 my-2 grid h-52 gap-3">
        {modes.map((mode) => (
          <ModeSelectItem
            selectMode={RoomMode}
            handleSelect={() => dispatch(setRoomMode(mode.id))}
            {...mode}
            key={mode.id}
          />
        ))}
      </div>
    </>
  );
};

export default RoomSettingSelect;
