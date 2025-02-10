import { useRef, useState } from "react";

import { SquarePen } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { RoomsType } from "../type";

import useCreateRoom from "@/hooks/useCreateRoom";

// ルームを編集するコンポーネント
const EditRoom = ({ id, room }: RoomsType) => {
  const [roomName, setRoomName] = useState<string>(room.roomName);
  const promptRef = useRef<HTMLInputElement>(null);

  const { updateRoom } = useCreateRoom();

  // ルームを更新する処理
  const handleSubmit = async () => {
    let prompt = "";
    if (promptRef.current) prompt = promptRef.current.value;

    await updateRoom(roomName, prompt, id);

    setRoomName("");
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-muted">
        <SquarePen size={16} />
        <p>ルームを編集</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ルームを編集</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="room-title">ルーム名</Label>
            <Input
              id="room-title"
              onChange={(e) => setRoomName(e.target.value)}
              defaultValue={roomName}
            />
          </div>
          {room.mode === 1 && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="prompt">プロンプト</Label>
              <Input id="prompt" ref={promptRef} defaultValue={room.prompt} />
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!roomName.match(/\S/g)}
            >
              ルーム情報を更新する
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditRoom;
