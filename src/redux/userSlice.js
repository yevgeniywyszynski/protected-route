import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: {
    isFetching: false,
  },
  userState: {
    login: false,
    email: "hubert@gmail.com",
    pass: "pas123",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = true;
    },

    login: (state, action) => {
      let userDate = action.payload;
      if (
        state.userState.pass === userDate.userPassword &&
        state.userState.email === userDate.userEmail
      ) {
        state.userState.login = true;
      }
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
