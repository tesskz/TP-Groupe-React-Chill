import { Outlet } from 'react-router'
import Menu from '../components/Menu.tsx'
import Home from '../pages/Home.tsx'
import RecipeDetail from '../pages/RecipeDetail.tsx'
import Users from '../pages/Users.tsx'
import UserDetail from '../pages/UserDetail.tsx'
import Login from '../pages/Login.tsx'
import Profile from '../pages/Profile.tsx'
import Favoris from '../pages/Favoris.tsx'
import Blog from '../pages/Blog.tsx'
import PostDetail from '../pages/PostDetail.tsx'
import NotFound from '../pages/NotFound.tsx'
import GuestRoute from './GuestRoute.tsx'
import PrivateRoute from './PrivateRoute.tsx'
import Citation from "../pages/Citation.tsx";

const Layout = () => (
    <>
        <Menu />
        <Outlet />
    </>
)

const routes = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/recipes/:id',
                element: <RecipeDetail />,
            },
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/users/:id',
                element: <UserDetail />,
            },
            {
                path: '/posts',
                element: <Blog />,
            },
            {
                path: '/posts/:id',
                element: <PostDetail />,
            },
            {
                path: '/login',
                element: <GuestRoute><Login /></GuestRoute>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: '/favoris',
                element: <PrivateRoute><Favoris /></PrivateRoute>,
            },
            {
                path: "/citation",
                element: <Citation />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]

export default routes
