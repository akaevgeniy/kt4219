import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })
const reducers = combineReducers({
  counter: counterReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["counter"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
