/* eslint-disable import/named */
import { DocumentData } from "firebase/firestore";

interface RoomsType {
  id: string;
  room: DocumentData;
  // roomName: string;
  // prompt: string | null;
  // mode: "default" | "diary" | "prompt";
  // createdAt: Date;
}

export type { RoomsType };
