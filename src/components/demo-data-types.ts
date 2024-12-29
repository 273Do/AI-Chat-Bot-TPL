interface RoomType {
  id: number;
  name: string;
  prompt: string | null;
  mode: "default" | "diary" | "prompt";
  created: string;
  updated: string;
}

export type { RoomType };
