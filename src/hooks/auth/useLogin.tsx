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

    const loginUser = async (credentials: Credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post(api.login, credentials);
            localStorage.setItem("token", response.headers["authorization"]);
            console.log(response.data.data);
            localStorage.setItem("userId", response.data.data.id);
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
