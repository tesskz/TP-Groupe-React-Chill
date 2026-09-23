import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import './index.css'
import routes from './routes'
import { store } from './store/store.ts'
import { setUsers } from './store/reducers/user.ts'
import { setRecipes } from './store/reducers/recipe.ts'
import { setPosts } from './store/reducers/post.ts'
import { setComments } from './store/reducers/comment.ts'
import { setQuote } from './store/reducers/quote.ts'
import { setLoggedUser } from './store/reducers/auth.ts'
import { setLoading } from './store/reducers/loading.ts'

const router = createBrowserRouter(routes)

const getUsers = async () => {
    const response = await axios.get('https://dummyjson.com/users?limit=0')
    store.dispatch(setUsers(response.data.users))
}

const getRecipes = async () => {
    const response = await axios.get('https://dummyjson.com/recipes?limit=0')
    store.dispatch(setRecipes(response.data.recipes))
}

const getPosts = async () => {
    const response = await axios.get('https://dummyjson.com/posts?limit=0')
    store.dispatch(setPosts(response.data.posts))
}

const getComments = async () => {
    const response = await axios.get('https://dummyjson.com/comments?limit=0')
    store.dispatch(setComments(response.data.comments))
}

const getQuote = async () => {
    const day = new Date().getDate()
    const url = day === 31 ? 'https://dummyjson.com/quotes/random' : `https://dummyjson.com/quotes/${day}`
    const response = await axios.get(url)
    store.dispatch(setQuote(response.data))
}

const getLoggedUser = async () => {
    try {
        const url = 'https://dummyjson.com/auth/me'
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        store.dispatch(setLoggedUser(response.data))
    } catch (e) {
        localStorage.removeItem('token')
        store.dispatch(setLoggedUser(null))
    }
}

Promise.all([getUsers(), getRecipes(), getPosts(), getComments(), getQuote(), getLoggedUser()])
    .finally(() => store.dispatch(setLoading(false)))

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
