import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './slices/adminSlice'
import quotesReducer from './slices/quotesSlice'
import saintsReducer from './slices/saintsSlice'
import scriptureReducer from './slices/scriptureSlice'
import timelineReducer from './slices/timelineSlice'
import usersReducer from './slices/usersSlice'
import worksReducer from './slices/worksSlice'

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    quotes: quotesReducer,
    saints: saintsReducer,
    scripture: scriptureReducer,
    timeline: timelineReducer,
    users: usersReducer,
    works: worksReducer,
  },
})