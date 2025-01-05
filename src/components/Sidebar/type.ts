interface RoomType {
  id: string;
  roomName: string;
  prompt: string | null;
  mode: "default" | "diary" | "prompt";
  createdAt: Date;
}

export type { RoomType };
