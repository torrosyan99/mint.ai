import { configureStore } from '@reduxjs/toolkit';

import { aiReducer } from '@/entities/ai';
import { themeReducer } from '@/entities/theme';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        ai: aiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
