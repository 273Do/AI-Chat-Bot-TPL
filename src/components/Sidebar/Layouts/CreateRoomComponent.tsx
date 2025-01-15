import React, { useRef, useState } from "react";

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

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import useCreateRoom from "@/functions/useCreateRoom";

//
const CreateRoomComponent = () => {
  const roomMode = useAppSelector((state: RootState) => state.roomMode.mode);

  const [roomName, setRoomName] = useState<string>("");
  const promptRef = useRef<HTMLInputElement>(null);

  const { createRoom } = useCreateRoom();

  // ルームを作成する処理
  const handleSubmit = async () => {
    let prompt = "";
    if (promptRef.current) prompt = promptRef.current.value;

    await createRoom(roomName, prompt, new Date());

    setRoomName("");
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-muted">
        <SquarePen size={16} />
        <p>新しいルームを作成</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>新しいルームを作成</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="room-title">ルーム名</Label>
            <Input
              id="room-title"
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>
          {roomMode === 1 && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="prompt">プロンプト</Label>
              <Input id="prompt" ref={promptRef} />
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
              新しいルームを作成する
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoomComponent;
