import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialRoomState {
  room_id: string | null;
  room_name: string | null;
  room_mode: string | null;
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
  },
});

export const { setRoomInfo } = RoomSlice.actions;
export default RoomSlice.reducer;
