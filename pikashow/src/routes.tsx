import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Movies from "./pages/movies/Movies";
import TvSeries from "./pages/tv-series/TvSeries";
import Bookmark from "./pages/bookmark/Bookmark";

export const router =createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement:<Error />
    },
    {
        path: "/movies",
        element: <Movies />,
        errorElement:<Error />
    },
    {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement:<Error />
    },
    {
        path: "/bookmark",
        element: <Bookmark />,
        errorElement:<Error />
    },
   
])