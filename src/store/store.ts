import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user'
import authReducer from './reducers/auth'

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer
    },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']