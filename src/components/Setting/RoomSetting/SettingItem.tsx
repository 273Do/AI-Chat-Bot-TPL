import React from "react";

import { SettingItemType } from "../LLMs/type";

const ModeSelectItem = (mode: SettingItemType) => {
  return (
    <div
      onClick={() => mode.handleSelect(mode.id)}
      className={`flex cursor-pointer items-center justify-start gap-4 rounded-lg border border-border px-4 hover:bg-muted ${
        mode.selectMode === mode.id
          ? "border-primary"
          : "border-border hover:bg-muted"
      }`}
    >
      <div>{mode.icon}</div>
      <div>
        <p>{mode.title}</p>
        <p className="text-xs text-muted-foreground">{mode.description}</p>
      </div>
    </div>
  );
};

export default ModeSelectItem;
