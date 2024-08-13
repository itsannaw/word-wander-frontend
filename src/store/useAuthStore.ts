import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const useAuthStore = create(
    persist<AuthStore>(
        (set) => ({
            isLoggedIn: !!localStorage.getItem("token"),
            login: () => set({ isLoggedIn: true }),
            logout: () => {
                set({ isLoggedIn: false });
                localStorage.removeItem("token");
            },
        }),
        {
            name: "userLoginStatus",
        },
    ),
);

export default useAuthStore;
