/* eslint-disable import/named */
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
  Query,
  addDoc,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

// ログイン中のユーザのドキュメントIDを取得する関数
const fetchUserDocId = async (uid: string): Promise<string> => {
  // usersコレクションからuserIdが一致するドキュメントを取得するクエリ
  const usersQuery: Query<DocumentData> = query(
    collection(db, "users"),
    where("userId", "==", uid)
  );

  // ユーザのドキュメントIDを保存する変数
  let userDocId: string = "";

  // ユーザのドキュメントを取得 / ユーザのドキュメントを作成
  try {
    const usersSnapshot = await getDocs(usersQuery);

    if (!usersSnapshot.empty) {
      // ユーザーが存在する場合はドキュメントIDを取得
      // console.log("データあり");
      const userDoc = usersSnapshot.docs[0];
      userDocId = userDoc.id;
    } else {
      // ユーザが存在しない場合はユーザを作成する処理を記述する
      // console.log("データなし");
      // console.log("ユーザを作成する");
      // dbにユーザを作成する
      const createUserDoc = await addDoc(collection(db, "users"), {
        userId: uid,
      });
      userDocId = createUserDoc.id;
    }
  } catch (error) {
    // console.error("Error fetching user document:", error);
    userDocId = ""; // エラー時も空文字列を返す
  }

  return userDocId;
};

export default fetchUserDocId;
