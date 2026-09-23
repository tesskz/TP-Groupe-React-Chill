export interface Recipe {
    id: number
    name: string
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cuisine: string
    rating: number
    image: string
    ingredients: string[]
    instructions: string[]
}