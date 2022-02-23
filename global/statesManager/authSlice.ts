import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  email: string;
  user: string;
  token: string | null;
};
type Reducers = {
  login: (
    state: State,
    action: PayloadAction<{ email: string; user: string; token: string }>
  ) => void;
  logout: (state: State) => void;
};

const initialState: State = {
  email: "",
  user: "",
  token: "",
};

export const authSlice = createSlice<State, Reducers>({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state = initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
