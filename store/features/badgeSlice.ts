import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BadgeState {
  [key: string]: number;
}

const initialState: BadgeState = {};

const badgeSlice = createSlice({
  name: 'badge',
  initialState,
  reducers: {
    setBadgeCount(state, action: PayloadAction<{ key: string; count: number }>) {
      const { key, count } = action.payload;
      state[key] = count;
    },
    clearBadge(state, action: PayloadAction<{ key: string }>) {
      delete state[action.payload.key];
    },
  },
});

export const { setBadgeCount, clearBadge } = badgeSlice.actions;
export default badgeSlice.reducer;
