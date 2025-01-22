import React from "react";

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

import useCreateRoom from "@/hooks/useCreateRoom";

// ルームを削除するコンポーネント
const DeleteALlRooms = () => {
  const { deleteAllRooms } = useCreateRoom();

  // ルームを削除する処理
  const handleSubmit = async () => {
    await deleteAllRooms();
  };

  return (
    <Dialog>
      <DialogTrigger className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-muted">
        <Trash2 size={16} />
        <p>ルームを全削除</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ルームを全削除</DialogTitle>
          <DialogDescription>この操作は取り消せません。</DialogDescription>
        </DialogHeader>
        <p>本当に削除しますか？</p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">キャンセル</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" variant="destructive" onClick={handleSubmit}>
              ルームを全削除する
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteALlRooms;
