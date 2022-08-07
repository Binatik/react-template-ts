import { configureStore } from '@reduxjs/toolkit';

import burger from './slice/burger/burger';

const store = configureStore({
  reducer: {
    burger,
  },

  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
