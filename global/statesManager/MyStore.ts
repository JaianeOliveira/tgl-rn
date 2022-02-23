import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import gameSlice from "./gameSlice";
import recentGamesSlice from "./recentGamesSlice";
import cartSlice from "./cartSlice";
import accountSlice from "./AccountSlice";

const MyStore = configureStore({
  reducer: {
    auth: authSlice,
    game: gameSlice,
    recentGames: recentGamesSlice,
    cart: cartSlice,
    account: accountSlice,
  },
});
export type RootState = ReturnType<typeof MyStore.getState>;
export default MyStore;
