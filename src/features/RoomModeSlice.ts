import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RoomModeState {
  mode: number;
}

const initialState: RoomModeState = {
  mode: 0,
};

export const RoomModeSlice = createSlice({
  name: "RoomMode",
  initialState,
  reducers: {
    setRoomMode: (state, action: PayloadAction<number>) => {
      state.mode = action.payload;
    },
  },
});

export const { setRoomMode } = RoomModeSlice.actions;
export default RoomModeSlice.reducer;
