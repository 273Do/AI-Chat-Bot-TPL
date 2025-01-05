import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";

import { RoomType } from "@/components/Sidebar/type";
import { db } from "@/firebase/firebase";

// ユーザのルーム情報を取得するカスタムフック
const useRoomCollection = (userDocId: string) => {
  const [roomDocuments, setRoomDocuments] = useState<RoomType[]>([]);

  const roomRef = collection(db, "users", userDocId, "rooms");

  // ユーザの全ルームを取得してstateに保存
  useEffect(() => {
    console.log("fetching rooms");
    onSnapshot(roomRef, (roomSnapshot) => {
      const roomsResult: RoomType[] = [];
      roomSnapshot.docs.forEach((doc) => {
        const data = doc.data();
        roomsResult.push({
          id: data.id,
          roomName: data.roomName,
          prompt: data.prompt,
          mode: data.mode,
          createdAt: data.createdAt,
        });
        setRoomDocuments(roomsResult);
      });
    });
  }, []);

  return { roomDocuments };
};

export default useRoomCollection;
