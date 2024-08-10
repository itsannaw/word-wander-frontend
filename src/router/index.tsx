import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/not-found/NotFoundPage";
import SignUpPage from "../pages/login/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "signup",
                element: <SignUpPage />,
            },
        ],
    },
]);
