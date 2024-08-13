import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import axiosInstance from "../../api/axiosSettings";
import { api } from "../../consts/api";

interface Credentials {
    email: string;
    password: string;
}

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuthStore.getState();

    console.log("useLogin called");

    const loginUser = async (credentials: Credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post(api.login, credentials);
            localStorage.setItem("token", response.data.token);
            login();
        } catch (error: unknown) {
            setError((error as Error).message || "Login failed");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return { loginUser, loading, error };
};

export default useLogin;
