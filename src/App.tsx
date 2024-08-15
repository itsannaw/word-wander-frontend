import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <main className="flex min-h-screen flex-col gap-4">
                <Navbar />
                <Outlet />
            </main>
        </QueryClientProvider>
    );
};

export default App;
