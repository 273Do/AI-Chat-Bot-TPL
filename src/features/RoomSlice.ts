import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialRoomState {
  room_id: string | null;
  room_name: string | null;
  room_mode: number | null;
}

const initialState: InitialRoomState = {
  room_id: null,
  room_name: null,
  room_mode: null,
};

export const RoomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomInfo: (state, action: PayloadAction<InitialRoomState>) => {
      state.room_id = action.payload?.room_id;
      state.room_name = action.payload?.room_name;
      state.room_mode = action.payload?.room_mode;
    },
    resetRoomInfo: (state) => {
      state.room_id = null;
      state.room_name = null;
      state.room_mode = null;
    },
  },
});

export const { setRoomInfo, resetRoomInfo } = RoomSlice.actions;
export default RoomSlice.reducer;
