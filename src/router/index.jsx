import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Book, {loaderBook} from "../pages/Book";
import Favorites, {loaderFavourites} from "../pages/Favorites";
import Contact from "../pages/Contact";
import Access from "../pages/Access";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";

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
                        path: "/access",
                        element: <Access/>
                    }
                ]
            }
        ]
    }
])