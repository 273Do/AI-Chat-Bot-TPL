import React, { useState } from "react";

import { Calendar, MessageSquare, MessageSquareQuote } from "lucide-react";

import SettingItem from "./SettingItem";

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
  const [selectMode, setSelectMode] = useState<number>(0);

  return (
    <>
      <p className="text-md mt-4 font-bold">ルームモードの設定</p>
      <div className="grid-row-3 my-2 grid h-52 gap-3">
        {modes.map((mode) => (
          <SettingItem
            selectMode={selectMode}
            handleSelect={() => setSelectMode(mode.id)}
            {...mode}
            key={mode.id}
          />
        ))}
      </div>
    </>
  );
};

export default RoomSettingSelect;
