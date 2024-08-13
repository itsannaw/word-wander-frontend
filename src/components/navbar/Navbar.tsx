import { Link } from "react-router-dom";
import DarkModeToggle from "../toggle/DarkModeToggle";

const Navbar = () => {
    return (
        <nav className="border-gray-200">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between">
                <Link to="/" className="flex items-center rtl:space-x-reverse">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                            WordWander
                        </h1>
                        <p className="text-gray-500">Unleash Your Story, Explore Endless Worlds!</p>
                    </div>
                </Link>
                <div className="flex items-center gap-4">
                    <DarkModeToggle />
                    <Link className="hover:text-indigo-500 hover:underline" to="/signup">
                        Sign Up
                    </Link>
                    <Link className="hover:text-indigo-500 hover:underline" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
