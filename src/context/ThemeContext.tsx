import { ReactNode, createContext, useState, useMemo, useCallback } from "react";

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = useCallback(() => {
        setIsDarkTheme((isDark) => !isDark);
    }, [setIsDarkTheme]);

    return (
        <ThemeContext.Provider
            value={useMemo(() => ({ isDarkTheme, toggleTheme }), [isDarkTheme, toggleTheme])}
        >
            <main className={`bg-background text-foreground ${isDarkTheme ? "dark" : ""}`}>
                {children}
            </main>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
