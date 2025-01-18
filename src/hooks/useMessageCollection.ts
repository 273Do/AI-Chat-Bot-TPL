import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { MessagesType } from "@/components/Chat/type";
import { db } from "@/firebase/firebase";

// ルームのチャット情報を取得するカスタムフック
const useMessageCollection = () => {
  const [messageDocuments, setMessageDocuments] = useState<MessagesType[]>([]);

  //  ログインしているユーザのドキュメントIDを取得
  const userDocId = useAppSelector(
    (state: RootState) => state.user.user?.userDocId
  );

  // 現在のルームのドキュメントIDを取得
  const roomId = useAppSelector((state: RootState) => state.room.room_id);

  // ルームのメッセージ情報を取得するためのコレクション参照
  const messageRef =
    userDocId && roomId
      ? collection(db, "users", userDocId, "rooms", roomId, "messages")
      : null;

  // ルームの全メッセージを取得してstateに保存
  useEffect(() => {
    console.log("fetching messages");
    if (messageRef) {
      onSnapshot(messageRef, (messageSnapshot) => {
        const messagesResult: MessagesType[] = [];
        messageSnapshot.docs.forEach((doc) => {
          messagesResult.push({
            id: doc.id,
            message: doc.data(),
          });
        });
        // 順番を逆にする
        setMessageDocuments(messagesResult.reverse());
      });
    }
  }, [roomId]);

  return { messageDocuments };
};

export default useMessageCollection;
