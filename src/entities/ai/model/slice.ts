import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum AI {
    gpt = 'GPT 5 mini',
    klingMotion = 'Kling Motion Control',
}
interface AiState {
    value: AI;
}

const initialState: AiState = {
    value: AI.gpt,
};

const aiSlice = createSlice({
    name: 'AI',
    initialState,
    reducers: {
        changeAi: (state, action: PayloadAction<AI>) => {
            state.value = action.payload;
        },
    },
});

export const { actions: aiActions, reducer: aiReducer } = aiSlice;
