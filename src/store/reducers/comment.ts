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

        addComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload)
        },

        deleteComment: (state, action: PayloadAction<number>) => {
            state.comments = state.comments.filter(
                (comment) => comment.id !== action.payload
            )
        },
    },
})

export const {
    setComments,
    addComment,
    deleteComment,
} = commentSlice.actions

export default commentSlice.reducer