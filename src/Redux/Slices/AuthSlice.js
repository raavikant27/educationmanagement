import { createSlice } from "@reduxjs/toolkit";

//initial state of auth

const initiaLState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

// create a slice

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

//export const {}=authSlice.actions;

export default authSlice.reducer;
