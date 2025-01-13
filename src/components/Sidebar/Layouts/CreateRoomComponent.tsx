import React, { useRef, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
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
import { db } from "@/firebase/firebase";

const CreateRoomComponent = () => {
  const roomMode = useAppSelector((state: RootState) => state.roomMode.mode);
  const userDocId = useAppSelector(
    (state: RootState) => state.user.user?.userDocId
  );

  const [titleInput, setTitleInput] = useState<string>("");
  const promptRef = useRef<HTMLInputElement>(null);

  // ルームを作成する処理
  const handleSubmit = async () => {
    if (!userDocId) {
      return;
    }

    await addDoc(collection(db, "users", userDocId, "rooms"), {
      roomName: titleInput,
      prompt: promptRef.current ? promptRef.current.value : "",
      mode: roomMode,
      createdAt: new Date(),
    });
    setTitleInput("");
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
              onChange={(e) => setTitleInput(e.target.value)}
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
              disabled={!titleInput.match(/\S/g)}
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
