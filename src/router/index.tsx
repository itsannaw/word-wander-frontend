import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/not-found/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
        ],
    },
]);