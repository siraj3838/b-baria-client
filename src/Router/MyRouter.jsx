import { createBrowserRouter } from "react-router-dom";
import Doner from "../Pages/Doner";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Message from "../Pages/Message";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Root from "../Root/Root";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: ()=> fetch('http://localhost:5039/doners')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/doner',
                element: <Doner></Doner>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default MyRouter;