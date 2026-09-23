import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import axios from 'axios'
import { store } from './store/store.ts'
import { setLoggedUser } from "./store/reducers/auth.ts";
import routes from './routes'
import { Provider } from 'react-redux'
import { setUsers } from './store/reducers/user'

const getUsers = async () => {
  const url = "https://dummyjson.com/users";
  const response = await axios.get(url);
  store.dispatch(setUsers(response.data.users))
}



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

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)