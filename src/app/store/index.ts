import {configureStore} from "@reduxjs/toolkit";
import { themeReducer } from '@/entities/theme';
import {aiReducer} from "@/entities/ai";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ai: aiReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
