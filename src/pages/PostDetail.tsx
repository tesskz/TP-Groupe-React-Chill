import { useEffect, useState, type FormEvent } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import {
    addComment,
    deleteComment,
    setComments,
} from '../store/reducers/comment'

function PostDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const postId = Number(id)

    const posts = useSelector((state: RootState) => state.post.posts)
    const comments = useSelector(
        (state: RootState) => state.comment.comments
    )

    const [body, setBody] = useState('')

    const post = posts.find((post) => post.id === postId)

    useEffect(() => {
        if (comments.length === 0) {
            axios
                .get('https://dummyjson.com/comments')
                .then((response) => {
                    dispatch(setComments(response.data.comments))
                })
        }
    }, [dispatch, comments.length])

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        if (!body.trim()) {
            return
        }

        try {
            const response = await axios.post(
                'https://dummyjson.com/comments/add',
                {
                    body,
                    postId,
                    userId: 1,
                }
            )

            dispatch(addComment(response.data))

            setBody('')
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async (commentId: number) => {
        try {
            await axios.delete(
                `https://dummyjson.com/comments/${commentId}`
            )

            dispatch(deleteComment(commentId))
        } catch (error) {
            console.error(error)
        }
    }

    if (!post) {
        return (
            <main>
                <h1>Article introuvable</h1>
                <Link to="/posts">
                    Retour au blog
                </Link>
            </main>
        )
    }

    const postComments = comments.filter(
        (comment) => comment.postId === postId
    )

    return (
        <main className="post-detail">
            <Link to="/posts">
                ← Retour au blog
            </Link>

            <h1>{post.title}</h1>

            <p>{post.body}</p>

            <p>
                Vues : {post.views}
            </p>

            <p>
                Likes : {post.reactions.likes}
            </p>

            <p>
                Tags : {post.tags.join(', ')}
            </p>

            <section>
                <h2>Commentaires</h2>

                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Écrire un commentaire..."
                        value={body}
                        onChange={(event) =>
                            setBody(event.target.value)
                        }
                    />

                    <button type="submit">
                        Ajouter un commentaire
                    </button>
                </form>

                {postComments.map((comment) => (
                    <article key={comment.id}>
                        <h3>{comment.user.fullName}</h3>

                        <p>{comment.body}</p>

                        <p>
                            Likes : {comment.likes}
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                handleDelete(comment.id)
                            }
                        >
                            Supprimer
                        </button>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default PostDetail