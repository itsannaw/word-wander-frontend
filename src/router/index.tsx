import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/not-found/NotFoundPage";
import SignUpPage from "../pages/signup/SignUpPage";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import PostDetails from "../pages/post-details/PostDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "details/:id",
                element: <PostDetails />,
            },
            {
                path: "signup",
                element: <SignUpPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
        ],
    },
]);
