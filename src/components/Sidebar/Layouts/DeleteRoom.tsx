import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { RoomsType } from "../type";

import { successToast } from "@/components/Toast/toast";
import useCreateRoom from "@/hooks/useCreateRoom";

// ルームを削除するコンポーネント
const DeleteRoom = ({ id, room }: RoomsType) => {
  const { deleteRoom } = useCreateRoom();

  // ルームを削除する処理
  const handleSubmit = async () => {
    await deleteRoom(id);
    successToast("✅ 成功", "ルームを削除しました。");
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-muted">
        <Trash2 size={16} />
        <p>ルームを削除</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ルーム( {room.roomName} )を削除</DialogTitle>
          <DialogDescription>この操作は取り消せません。</DialogDescription>
        </DialogHeader>
        <p>本当に削除しますか？</p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">キャンセル</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" variant="destructive" onClick={handleSubmit}>
              ルームを削除する
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteRoom;
