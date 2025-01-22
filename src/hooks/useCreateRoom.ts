import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { errorToast } from "@/components/Toast/toast";
import { resetRoomInfo, setRoomInfo } from "@/features/RoomSlice";
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
    // エラー処理
    if (!userDocId) {
      errorToast("エラー", "ユーザが見つかりませんでした。");
      return;
    }

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
        room_prompt: prompt,
      })
    );
  };

  // ルームを更新する関数
  const updateRoom = async (
    roomName: string,
    prompt: string,
    roomMode_: number,
    roomId: string
  ) => {
    // エラー処理
    if (!userDocId) {
      errorToast("エラー", "ユーザが見つかりませんでした。");
      return;
    }

    // dbのルームを更新
    const roomDocRef = doc(roomRef, roomId);
    await updateDoc(roomDocRef, {
      roomName,
      prompt,
    });

    // ルーム情報をstateに保存
    dispatch(
      setRoomInfo({
        room_id: roomId,
        room_name: roomName,
        room_mode: roomMode_,
        room_prompt: prompt,
      })
    );
  };

  // ルームを削除する関数
  const deleteRoom = async (roomId: string) => {
    if (!userDocId) {
      errorToast("エラー", "ユーザが見つかりませんでした。");
      return;
    }

    await deleteDoc(doc(roomRef, roomId));

    // ルーム情報をリセット
    dispatch(resetRoomInfo());
  };

  return { createRoom, updateRoom, deleteRoom };
};

export default useCreateRoom;
