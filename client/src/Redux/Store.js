import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Feaches/UserSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});