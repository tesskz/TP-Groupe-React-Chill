import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const debut = localStorage.getItem("Favoris")

interface FavouriteState {
    recipeIds: number[]
}

const initialState: FavouriteState = {
    recipeIds : debut ? JSON.parse(debut) : []
}

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<number>) => {
            state.recipeIds.push(action.payload)
            localStorage.setItem("Favoris", JSON.stringify(state.recipeIds))
        },
        removeFavourite: (state, action: PayloadAction<number>) => {
            state.recipeIds = state.recipeIds.filter((id) => id !== action.payload)
            localStorage.setItem("Favoris", JSON.stringify(state.recipeIds))
        },
    },
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions
export default favouriteSlice.reducer
