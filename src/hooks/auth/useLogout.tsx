import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import axiosInstance from "../../api/axiosSettings";
import { api } from "../../consts/api";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { logout } = useAuthStore.getState();

    const logoutUser = async () => {
        setLoading(true);
        setError(null);
        try {
            await axiosInstance.delete(api.logout);
            localStorage.removeItem("token");
            logout();
        } catch (error: unknown) {
            setError((error as Error).message || "Logout failed");
        } finally {
            setLoading(false);
        }
    };

    return { logoutUser, loading, error };
};

export default useLogout;
