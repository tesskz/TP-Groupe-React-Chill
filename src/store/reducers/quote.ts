import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Quote } from '../../types/quote'

interface QuoteState {
    quote: Quote | null
}

const initialState: QuoteState = {
    quote: null,
}

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        setQuote: (state, action: PayloadAction<Quote | null>) => {
            state.quote = action.payload
        },
    },
})

export const { setQuote } = quoteSlice.actions
export default quoteSlice.reducer
