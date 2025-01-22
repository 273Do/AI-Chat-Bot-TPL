import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { saveSettingsLocally } from "@/functions/saveSettingsLocally";

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
      saveSettingsLocally("room-mode", state.mode);
    },
  },
});

export const { setRoomMode } = RoomModeSlice.actions;
export default RoomModeSlice.reducer;
