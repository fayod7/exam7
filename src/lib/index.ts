import { configureStore } from '@reduxjs/toolkit'
import updatingReducer from './features/updatingSlice'
export const store = configureStore({
  reducer:{
    updatingReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch