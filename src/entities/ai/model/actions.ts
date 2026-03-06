import type { RootState } from '@/app/store';

export const selectAi = (state: RootState) => state.ai.value;
