import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App.tsx'
import Menu from './components/Menu.tsx'
import RecipeDetail from './components/RecipeDetail.tsx'
import Annuaire from './components/Annuaire.tsx'
import { Outlet } from 'react-router';
import Login from './components/Login.tsx'
import User from './components/User.tsx'
import Error from './components/Error.tsx'
import Profile from './components/Profile.tsx'
import axios from 'axios'


const Layout = () => (
  <>
    <Menu />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetail />,
      },
      {
        path: "/annuaire",
        element: <Annuaire />,
      },
      {
        path: "/Connexion",
        element: <Login />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/profile/me",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Error />,
      }
    ]
  }
]);

const getLoggedUser = async () => {
  try {
    const url = "https://dummyjson.com/auth/me";
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    store.dispatch(setLoggedUser(response.data))
  } catch(e) {
    localStorage.removeItem('token')
    store.dispatch(setLoggedUser(null))
  }
}

Promise.all([getUsers(), getLoggedUser()])


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
  