import { ReactNode } from "react";

interface LLMItemType {
  id: number;
  name: string;
  logo: ReactNode;
  bg: string;
  border: string;
  selectLLM: number;
  handleSelect: (id: number) => void;
}

export type { LLMItemType };
