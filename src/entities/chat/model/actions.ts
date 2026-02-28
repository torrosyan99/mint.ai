import type {RootState} from "@/app/store";

export const selectMessages = (state: RootState) => state.messages.items;
export const selectSending = (state: RootState) => state.messages.sending;
