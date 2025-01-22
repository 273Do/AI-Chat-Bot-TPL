import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { errorToast } from "@/components/Toast/toast";
import { db } from "@/firebase/firebase";

// メッセージを送信するカスタムフック
const useSendMessage = () => {
  //  ログインしているユーザのドキュメントIDを取得
  const userDocId = useAppSelector(
    (state: RootState) => state.user.user?.userDocId
  );

  // 現在のルームのドキュメントIDを取得
  const roomDocId = useAppSelector((state: RootState) => state.room.room_id);

  // ルームのメッセージ情報を取得するためのコレクション参照
  const messageRef =
    userDocId && roomDocId
      ? collection(db, "users", userDocId, "rooms", roomDocId, "messages")
      : null;

  // メッセージを作成する関数
  const sendMessage = async (message: string, AIModel: number | null) => {
    // エラー処理
    if (!messageRef) {
      errorToast("エラー", "ルームまたはユーザが見つかりませんでした。");
      return;
    }

    try {
      // dbにメッセージを作成
      const createMessageDoc = await addDoc(messageRef, {
        message,
        AIModel,
        createdAt: new Date(),
      });
      return createMessageDoc.id;
    } catch (error) {
      errorToast("エラー", "メッセージの送信に失敗しました。");
      return "";
    }
  };

  // メッセージを更新する関数
  const updateMessage = async (message: string, messageDocId: string) => {
    // エラー処理
    if (!messageRef) {
      errorToast("エラー", "ルームまたはユーザが見つかりませんでした。");
      return;
    }

    // dbのメッセージを更新
    const messageDocRef = doc(messageRef, messageDocId);
    await updateDoc(messageDocRef, {
      message,
    });
  };

  // メッセージを削除する関数
  const deleteMessage = async (messageDocId: string) => {
    if (!messageRef) {
      errorToast("エラー", "ルームまたはユーザが見つかりませんでした。");
      return;
    }

    try {
      await deleteDoc(doc(messageRef, messageDocId));
    } catch (error) {
      errorToast("エラー", "メッセージの削除に失敗しました。");
    }
  };

  return { sendMessage, updateMessage, deleteMessage };
};

export default useSendMessage;
