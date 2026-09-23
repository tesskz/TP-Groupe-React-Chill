import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Comment } from '../../types/comment'

interface CommentState {
    comments: Comment[]
}

const initialState: CommentState = {
    comments: [],
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload
        },
    },
})

export const { setComments } = commentSlice.actions
export default commentSlice.reducer
