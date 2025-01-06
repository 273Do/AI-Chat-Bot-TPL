import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";

import { RoomsType } from "@/components/Sidebar/type";
import { db } from "@/firebase/firebase";

// ユーザのルーム情報を取得するカスタムフック
const useRoomCollection = (userDocId: string) => {
  const [roomDocuments, setRoomDocuments] = useState<RoomsType[]>([]);

  const roomRef = collection(db, "users", userDocId, "rooms");

  // ユーザの全ルームを取得してstateに保存
  useEffect(() => {
    console.log("fetching rooms");
    onSnapshot(roomRef, (roomSnapshot) => {
      const roomsResult: RoomsType[] = [];
      roomSnapshot.docs.forEach((doc) => {
        // const data = doc.data();
        roomsResult.push({
          id: doc.id, // ドキュメントのID
          room: doc.data(),
          //   roomName: data.roomName,
          //   prompt: data.prompt,
          //   mode: data.mode,
          //   createdAt: data.createdAt,
        });
        setRoomDocuments(roomsResult);
      });
    });
  }, []);

  return { roomDocuments };
};

export default useRoomCollection;
