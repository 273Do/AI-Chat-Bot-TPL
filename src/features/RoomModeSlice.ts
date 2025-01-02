import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialRoomModeState {
  mode: number;
}

const initialState: InitialRoomModeState = {
  mode: 0,
};

export const RoomModeSlice = createSlice({
  name: "roomMode",
  initialState,
  reducers: {
    setRoomMode: (state, action: PayloadAction<number>) => {
      state.mode = action.payload;
    },
  },
});

export const { setRoomMode } = RoomModeSlice.actions;
export default RoomModeSlice.reducer;
