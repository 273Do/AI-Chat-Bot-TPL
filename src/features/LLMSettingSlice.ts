import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialLLMSettingState {
  llm_id: number;
}

const initialState: InitialLLMSettingState = {
  llm_id: 0,
};

export const LLMSettingSlice = createSlice({
  name: "LLMSetting",
  initialState,
  reducers: {
    setLLMSetting: (state, action: PayloadAction<number>) => {
      state.llm_id = action.payload;
    },
  },
});

export const { setLLMSetting } = LLMSettingSlice.actions;
export default LLMSettingSlice.reducer;
