import { configureStore } from '@reduxjs/toolkit'
import reactionReducer from './reactionSlice'

export const store = configureStore({
  reducer: {
    reaction: reactionReducer,
  },
})