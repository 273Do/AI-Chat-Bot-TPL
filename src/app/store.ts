import { configureStore } from "@reduxjs/toolkit";

import LLMSettingReducer from "../features/LLMSettingSlice";
import RoomModeReducer from "../features/RoomModeSlice";

export const store = configureStore({
  reducer: {
    LLMSetting: LLMSettingReducer,
    RoomMode: RoomModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
