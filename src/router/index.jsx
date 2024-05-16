import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Book, {loaderBook} from "../pages/Book";
import Favorites, {loaderFavourites} from "../pages/Favorites";
import Contact from "../pages/Contact";
import Forum from "../pages/Forum";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";
import CreatePost from "../pages/CreatePost";
import Post, {loaderPost} from "../pages/Post";
import Respond, { loaderResponse } from "../pages/Respond";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                errorElement: <NotFound/>,
                children: [
                    {
                        path: "/",
                        element: <Home/>
                    },
                    {
                        path: "/search",
                        element: <Search/>
                    },
                    {
                        path: "/book/:key",
                        element: <Book/>,
                        loader: loaderBook
                    },
                    {
                        path: "/favorites",
                        element: <Favorites/>,
                        loader: loaderFavourites
                    },
                    {
                        path: "/contact",
                        element: <Contact/>
                    },
                    {
                        path: "/forum",
                        element: <Forum/>
                    },
                    {
                        path: "/publish",
                        element: <CreatePost/>
                    },
                    {
                        path: "/login",
                        element: <Login/>
                    },
                    {
                        path: "/register",
                        element: <Register/>
                    },
                    {
                        path: "/user",
                        element: <User/>
                    },
                    {
                        path: "/post/:id",
                        element: <Post/>,
                        loader: loaderPost
                    },
                    {
                        path: "/respond/:id",
                        element: <Respond/>,
                        loader: loaderResponse
                    }
                ]
            }
        ]
    }
])