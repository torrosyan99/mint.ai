import {configureStore} from "@reduxjs/toolkit";
import { themeReducer } from '@/entities/theme';
import {messagesReducer} from "@/entities/chat";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
