/* eslint-disable import/named */
import { DocumentData } from "firebase/firestore";

interface MessagesType {
  id: string;
  message: DocumentData;
}

export type { MessagesType };
