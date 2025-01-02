import { createSlice } from "@reduxjs/toolkit";

export interface LLMSettingState {
  mode: number;
}

const initialState: LLMSettingState = {
  mode: 0,
};

export const LLMSettingSlice = createSlice({
  name: "LLMSetting",
  initialState,
  reducers: {
    setLLMSetting: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setLLMSetting } = LLMSettingSlice.actions;
export default LLMSettingSlice.reducer;
