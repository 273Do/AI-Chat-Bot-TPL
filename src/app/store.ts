import { configureStore } from "@reduxjs/toolkit";

import LLMSettingReducer from "../features/LLMSettingSlice";
import RoomModeReducer from "../features/RoomModeSlice";
import RoomReducer from "../features/RoomSlice";
import UserReducer from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    room: RoomReducer,
    LLMSetting: LLMSettingReducer,
    roomMode: RoomModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
