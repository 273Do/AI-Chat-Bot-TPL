import { addDoc, collection } from "firebase/firestore";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { setRoomInfo } from "@/features/RoomSlice";
import { db } from "@/firebase/firebase";

// ルーム作成を行うカスタムフック
const useCreateRoom = () => {
  const userDocId = useAppSelector(
    (state: RootState) => state.user.user?.userDocId
  );
  const roomMode = useAppSelector((state: RootState) => state.roomMode.mode);
  const dispatch = useAppDispatch();

  // ユーザのルーム情報を取得するためのコレクション参照
  const roomRef = collection(db, "users", userDocId ?? "", "rooms");

  // ルームを作成する関数
  const createRoom = async (
    roomName: string,
    prompt: string,
    createdAt: Date
  ) => {
    if (!userDocId) return;

    // dbにルームを作成
    const createRoomDoc = await addDoc(roomRef, {
      roomName,
      prompt,
      mode: roomMode,
      createdAt: createdAt,
    });

    // ルーム情報をstateに保存
    dispatch(
      setRoomInfo({
        room_id: createRoomDoc.id,
        room_name: roomName,
        room_mode: roomMode,
      })
    );
  };

  return { createRoom };
};

export default useCreateRoom;
