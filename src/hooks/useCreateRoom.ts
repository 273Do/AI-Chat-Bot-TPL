import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { errorToast, successToast } from "@/components/Toast/toast";
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

    try {
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
      successToast("✅ 成功", "ルームを作成しました。");
    } catch (error) {
      errorToast("エラー", "ルームの作成に失敗しました。");
    }
  };

  // ルームを更新する関数
  const updateRoom = async (
    roomName: string,
    prompt: string,
    roomId: string
  ) => {
    // エラー処理
    if (!userDocId) {
      errorToast("エラー", "ユーザが見つかりませんでした。");
      return;
    }

    try {
      // dbのルームを更新
      const roomDocRef = doc(roomRef, roomId);
      await updateDoc(roomDocRef, {
        roomName,
        prompt,
      });

      successToast("✅ 成功", "ルーム更新しました。");
    } catch (error) {
      errorToast("エラー", "ルームの更新に失敗しました。");
    }
  };

  // ルームを削除する関数
  const deleteRoom = async (roomId: string) => {
    if (!userDocId) {
      errorToast("エラー", "ユーザが見つかりませんでした。");
      return;
    }

    try {
      await deleteDoc(doc(roomRef, roomId));
    } catch (error) {
      errorToast("エラー", "ルームの削除に失敗しました。");
    }

    // ルーム情報をリセット
    dispatch(resetRoomInfo());
  };

  return { createRoom, updateRoom, deleteRoom };
};

export default useCreateRoom;
