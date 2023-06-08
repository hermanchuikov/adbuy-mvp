import { configureStore } from "@reduxjs/toolkit";
import adReducer from './slices/adSlice'

export const store = configureStore({
    reducer: {
        ad: adReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch