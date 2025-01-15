import { createSlice } from "@reduxjs/toolkit";

export interface InitialUserState {
  user: null | {
    uid: string;
    photURL: string;
    email: string;
    displayName: string;
    userDocId: string;
  };
}

const initialState: InitialUserState = {
  user: null,
  // user: {
  //   uid: "123",
  //   photURL: "https://randomuser",
  //   email: "tet@main.com",
  //   displayName: "test",
  // },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
