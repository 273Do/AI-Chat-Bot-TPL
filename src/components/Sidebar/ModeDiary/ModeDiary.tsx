import { useEffect, useState } from "react";

import { CalendarDays, House } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { RoomsType } from "../type";

import { useAppDispatch } from "@/app/hooks";
import { setRoomInfo } from "@/features/RoomSlice";
import useCreateRoom from "@/functions/useCreateRoom";

// ダイアリーモード時のサイドバー表示
const ModeDiary = ({
  isOpen,
  rooms,
}: {
  isOpen: boolean;
  rooms: RoomsType[];
}) => {
  // カレンダーで選択した日付を取得
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const dispatch = useAppDispatch();
  const { createRoom } = useCreateRoom();

  useEffect(() => {
    // 今日ルームを作成 / 選択した日のルームの移動
    createTodayRoomAndModeRoom();
  }, [selectedDate]);

  // MEMO: 今日の日付のルームが存在しない場合は作成する
  const createTodayRoomAndModeRoom = async () => {
    // 選択した日付のルームが存在するか確認
    const existRoom = rooms.find(
      (item) =>
        new Date(item.room.createdAt.toDate()).toDateString() ===
        selectedDate?.toDateString()
    );

    // MEMO: 選択した日付のルームがない場合は対応したルームを作成する
    if (!existRoom) {
      // 選択した日付が
      if (selectedDate === undefined) return;

      // ルーム名を日付にする
      const roomName = `${selectedDate?.getFullYear()}-${
        (selectedDate?.getMonth() ?? 0) + 1
      }-${selectedDate?.getDate()}`;

      // ルームを作成しstateに保存
      await createRoom(
        roomName,
        "",
        new Date(
          selectedDate?.getFullYear() ?? 0,
          selectedDate?.getMonth() ?? 0,
          selectedDate?.getDate() ?? 0
        )
      );
    } else {
      // ルーム情報をstateに保存
      dispatch(
        setRoomInfo({
          room_id: existRoom.room.id,
          room_name: existRoom.room.roomName,
          room_mode: existRoom.room.mode,
        })
      );
    }
  };

  return (
    <SidebarMenuItem>
      <SidebarGroupLabel className="gap-2 text-xs font-normal text-muted-foreground">
        <CalendarDays size={16} />
        Calendar
      </SidebarGroupLabel>
      <SidebarMenuItem>
        {isOpen && (
          <Calendar
            mode="single"
            captionLayout="dropdown-buttons"
            className="bg-card-muted mb-2 rounded-lg border"
            selected={selectedDate}
            onSelect={setSelectedDate}
            fromYear={1960}
            toYear={2030}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
          />
        )}
      </SidebarMenuItem>
      <SidebarMenuButton onClick={() => setSelectedDate(new Date())}>
        <House size={16} />
        今日のルームを表示
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default ModeDiary;
