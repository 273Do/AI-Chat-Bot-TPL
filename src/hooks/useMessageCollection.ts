import { useEffect, useState } from "react";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

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
  const roomDocId = useAppSelector((state: RootState) => state.room.room_id);

  // ルームのメッセージ情報を取得するためのコレクション参照
  const messageRef =
    userDocId && roomDocId
      ? collection(db, "users", userDocId, "rooms", roomDocId, "messages")
      : null;

  // メッセージを作成日時の降順で取得
  const messageRefOrderBy = messageRef
    ? query(messageRef, orderBy("createdAt", "desc"))
    : null;

  // ルームの全メッセージを取得してstateに保存
  useEffect(() => {
    console.log("fetching messages");
    if (messageRefOrderBy) {
      onSnapshot(messageRefOrderBy, (messageSnapshot) => {
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
    } else {
      setMessageDocuments([]);
    }
  }, [roomDocId]);

  return { messageDocuments };
};

export default useMessageCollection;
