import {
    type PayloadAction,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';

import type { Message } from '../types';

interface MessagesState {
    items: Message[];
    sending: boolean;
}

const initialState: MessagesState = {
    items: [],
    sending: false,
};

export const getAnswer = createAsyncThunk<Message, void>(
    'MESSAGES/SEND',
    async () => {
        await new Promise((r) => setTimeout(r, 5000));

        return {
            type: 'answer' as const,
            status: 'streaming' as const,
            message: 'asdsadsadsaddsa',
        };
    },
);

const messagesSlice = createSlice({
    name: 'MESSAGES',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.items.push(action.payload);
        },
        finishStreaming(state) {
            const streamingInd = state.items.findIndex(
                (item) => item.status === 'streaming',
            );
            state.items[streamingInd].status = 'done';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getAnswer.fulfilled,
            (state, action: PayloadAction<Message>) => {
                state.items.push(action.payload);
                state.sending = false;
            },
        );
        builder.addCase(getAnswer.pending, (state) => {
            state.sending = true;
        });
    },
});

export const { actions: messagesActions, reducer: messagesReducer } =
    messagesSlice;
