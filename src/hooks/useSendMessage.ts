import { addDoc, collection } from "firebase/firestore";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
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
  const sendMessage = async (message: string, AIModel: string) => {
    if (!messageRef) return;

    // dbにルームを作成
    await addDoc(messageRef, {
      message,
      AIModel,
      createdAt: new Date(),
    });
  };

  return { sendMessage };
};

export default useSendMessage;
