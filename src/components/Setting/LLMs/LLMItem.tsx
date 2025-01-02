import React from "react";

import { LLMItemType } from "../types";

const LLMItem = (llm: LLMItemType) => {
  return (
    <div
      onClick={() => llm.handleSelect(llm.id)}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border 
        ${
          llm.selectLLM === llm.id
            ? `${llm.bg} ${llm.border}`
            : "border-border hover:bg-muted"
        }`}
    >
      <div></div>
      {llm.logo}
      <p className="mt-2 text-sm">{llm.name}</p>
    </div>
  );
};

export default LLMItem;
