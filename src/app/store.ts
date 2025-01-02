import { configureStore } from "@reduxjs/toolkit";

import LLMSettingReducer from "../features/LLMSettingSlice";

export const store = configureStore({
  reducer: {
    LLMSetting: LLMSettingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
