import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Themes } from '../types';

const initialState: Themes =
    (localStorage.getItem(import.meta.env.THEMES_LOCAL) as Themes) ||
    Themes.Light;

const themeSlice = createSlice({
    name: 'THEME',
    initialState,
    reducers: {
        setTheme: (_state, action: PayloadAction<Themes>) => {
            localStorage.setItem(import.meta.env.THEMES_LOCAL, action.payload);
            return action.payload;
        },
    },
});

export const { actions: themeActions, reducer: themeReducer } = themeSlice;
