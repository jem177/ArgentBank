import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userToken: null,
    userProfil: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.userToken = action.payload;
    },
    logoutUser: (state) => {
      state.userToken = null;
      state.userProfil = null;
    },
    infoUser: (state, action) => {
      state.userProfil = action.payload;
    },
    infoUserName: (state, action) => {
      console.log("voici le payload info user Name :", action.payload);
      state.userProfil.userName = action.payload;
    },
  },
});

export const { loginUser, logoutUser, infoUser, infoUserName } =
  loginSlice.actions;

export default loginSlice;
