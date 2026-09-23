import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import userReducer from './reducers/user'
import recipeReducer from './reducers/recipe'
import favouriteReducer from './reducers/favourite'
import postReducer from './reducers/post'
import commentReducer from './reducers/comment'
import quoteReducer from './reducers/quote'
import loadingReducer from './reducers/loading'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        recipe: recipeReducer,
        favourite: favouriteReducer,
        post: postReducer,
        comment: commentReducer,
        quote: quoteReducer,
        loading: loadingReducer,
    },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
