import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Recipe } from '../../types/recipe'

interface RecipeState {
    recipes: Recipe[]
}

const initialState: RecipeState = {
    recipes: [],
}

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setRecipes: (state, action: PayloadAction<Recipe[]>) => {
            state.recipes = action.payload
        },
    },
})

export const { setRecipes } = recipeSlice.actions
export default recipeSlice.reducer
