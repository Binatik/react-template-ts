import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; //Для типизации action

import { IBurger } from './types';

const initialState: IBurger = {
  toggle: false,
};

const burger = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggle } = burger.actions;
export default burger.reducer;
