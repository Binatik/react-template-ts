import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface IBurger {
  toggle: boolean
}

const initialState: IBurger = {
  toggle: false,
};

const burger = createSlice({
  name: "burger",
  initialState,
  reducers: {
    toggle(state, action: PayloadAction) {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggle } = burger.actions;
export default burger.reducer;
