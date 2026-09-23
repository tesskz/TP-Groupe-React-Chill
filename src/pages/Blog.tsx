import { useEffect, useState, type FormEvent } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { addPost, deletePost, setPosts } from '../store/reducers/post'
import "./Blox.css"

function Blog() {
    const dispatch = useDispatch()

    const posts = useSelector((state: RootState) => state.post.posts)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        if (posts.length === 0) {
            axios
                .get('https://dummyjson.com/posts')
                .then((response) => {
                    dispatch(setPosts(response.data.posts))
                })
        }
    }, [dispatch, posts.length])

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        if (!title.trim() || !body.trim()) {
            return
        }

        try {
            const response = await axios.post(
                'https://dummyjson.com/posts/add',
                {
                    title,
                    body,
                    userId: 1,
                }
            )

            dispatch(addPost(response.data))

            setTitle('')
            setBody('')
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`https://dummyjson.com/posts/${id}`)

            dispatch(deletePost(id))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className="blog">
            <h1>Blog</h1>

            <form onSubmit={handleSubmit} className="Blog-section">
                <h2>Ajouter un article</h2>

                <input
                    type="text"
                    placeholder="Titre"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <textarea
                    placeholder="Contenu"
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />

                <button type="submit">
                    Ajouter
                </button>
            </form>

            <section className="Blog-section">
                {posts.map((post) => (
                    <article key={post.id}>
                        <h2>{post.title}</h2>

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

                        <Link to={`/posts/${post.id}`}>
                            Voir l'article
                        </Link>

                        <button
                            type="button"
                            onClick={() => handleDelete(post.id)}
                        >
                            Supprimer
                        </button>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default Blog