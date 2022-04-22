import {configureStore} from '@reduxjs/toolkit';
import accessTokenSlice from './redux/accessTokenSlice';
import userSlice from './redux/userSlice';
import tracksSlice from "./redux/songSlice";

export const store =  configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    user: userSlice,
    tracks: tracksSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;