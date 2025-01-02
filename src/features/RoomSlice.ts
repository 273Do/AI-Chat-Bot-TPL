import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialRoomState {
  // 仮で数字を入れている
  room_id: number | null;
  room_name: string | null;
}

const initialState: InitialRoomState = {
  room_id: null,
  room_name: null,
};

export const RoomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomInfo: (state, action: PayloadAction<InitialRoomState>) => {
      state.room_id = action.payload?.room_id;
      state.room_name = action.payload?.room_name;
    },
  },
});

export const { setRoomInfo } = RoomSlice.actions;
export default RoomSlice.reducer;
