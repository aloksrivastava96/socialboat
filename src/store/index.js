import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import authReducer from "./auth";
import proReducer from "./profile";

const store = configureStore({
  reducer: { rootReducer: rootReducer, auth: authReducer, pro: proReducer }, // configureStore will merge all the slice redice into one big reducer
});

export default store;
