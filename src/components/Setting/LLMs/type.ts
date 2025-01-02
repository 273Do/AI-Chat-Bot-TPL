import { ReactNode } from "react";

interface SettingItemType {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  selectMode: number;
  handleSelect: (id: number) => void;
}

export type { SettingItemType };
