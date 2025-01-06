import { RoomsType } from "@/components/Sidebar/type";

// Firebase Timestampを日付に変換するヘルパー関数
const formatDate = (timestamp: { seconds: number }): string => {
  const date = new Date(timestamp.seconds * 1000); // 秒をミリ秒に変換
  return date.toISOString().split("T")[0]; // YYYY-MM-DD形式
};

// データを日付ごとにグループ化し、新しい順に並べる
const groupByDate = (data: RoomsType[]): { [key: string]: RoomsType[] } => {
  const grouped = data.reduce((acc: { [key: string]: RoomsType[] }, item) => {
    const date = formatDate(item.room.createdAt);

    // 日付が存在しなければ新しく作成
    if (!acc[date]) {
      acc[date] = [];
    }

    // 該当日付にデータを追加
    acc[date].push(item);

    // 各日付のデータを新しい順にソート（必要なら実行）
    acc[date].sort(
      (a, b) => b.room.createdAt.seconds - a.room.createdAt.seconds
    );

    return acc;
  }, {});

  // グループ化されたデータのキー（日付）を新しい順にソート
  const sortedKeys = Object.keys(grouped).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  // ソート済みキーでオブジェクトを再構成
  const sortedGrouped: { [key: string]: RoomsType[] } = {};
  sortedKeys.forEach((key) => {
    sortedGrouped[key] = grouped[key];
  });

  return sortedGrouped;
};

export default groupByDate;
