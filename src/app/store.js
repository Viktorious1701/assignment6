//store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
export default configureStore({
  reducer: {
    // Define a reducer here
    user: userReducer
  },
});
