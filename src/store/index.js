import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather";
import searchReducer from "./search";
const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
  },
});

export default store;
