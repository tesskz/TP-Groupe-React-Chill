import { Outlet } from "react-router";
import App from "../App.tsx";
import Menu from "../components/Menu.tsx";
import RecipeDetail from "../components/RecipeDetail.tsx";
import Annuaire from "../components/Annuaire.tsx";
import Login from "../components/Login.tsx";
import User from "../components/User.tsx";
import Profile from "../components/Profile.tsx";
import Error from "../components/Error.tsx";
import GuestRoute from "./GuestRoute.tsx";

const Layout = () => (
    <>
        <Menu />
        <Outlet />
    </>
);

const routes = [
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
                element: <GuestRoute><Login /></GuestRoute>,
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
];

export default routes;