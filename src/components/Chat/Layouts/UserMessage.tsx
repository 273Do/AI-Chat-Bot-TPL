import { MessagesType } from "../type";

// ユーザーのメッセージコンポーネント
const UserMessage = ({ message }: MessagesType) => {
  // 時間と分を取得
  const date = message.createdAt.toDate();
  const date_string = date.toLocaleDateString().replace(/\//g, "-");
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <div className="flex items-end gap-1">
      <p className="gap-1 text-xs">
        {date_string} {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}
      </p>
      <div className="max-w-[400px] rounded-lg bg-primary p-2 text-secondary">
        <p className="whitespace-pre-wrap">{message.message}</p>
      </div>
    </div>
  );
};

export default UserMessage;
