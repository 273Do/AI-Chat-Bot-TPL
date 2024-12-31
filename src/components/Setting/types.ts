import { ReactNode } from "react";

interface LLMItemType {
  id: number;
  name: string;
  logo: ReactNode;
  bg: string;
  border: string;
  selectedLLM: string;
  handleSelect: (name: string) => void;
}

export type { LLMItemType };
