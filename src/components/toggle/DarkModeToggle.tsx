import React from "react";
import { useTheme } from "../../hooks/useTheme";
import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";

const DarkModeToggle: React.FC = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            <img className="w-9" src={isDarkTheme ? Moon : Sun} alt="dark mode toggle" />
        </button>
    );
};

export default DarkModeToggle;
