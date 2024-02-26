import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./components/inputReducer"

const rootReducer = {
  data: inputSlice
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;