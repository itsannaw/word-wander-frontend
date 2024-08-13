import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return (
        <main className="flex flex-col min-h-screen gap-4">
            <Navbar />
            <Outlet />
        </main>
    );
};

export default App;
