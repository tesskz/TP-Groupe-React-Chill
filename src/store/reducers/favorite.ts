import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FavoriteState {
    recipeIds: number[]
}

const initialState: FavoriteState = {
    recipeIds: [],
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<number>) => {
            state.recipeIds.push(action.payload)
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.recipeIds = state.recipeIds.filter((id) => id !== action.payload)
        },
    },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
