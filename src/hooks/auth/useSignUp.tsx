import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import axiosInstance from "../../api/axiosSettings";
import { api } from "../../consts/api";

interface UserData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuthStore.getState();

    const signUp = async (userData: UserData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post(api.signup, userData);
            localStorage.setItem("token", response.data.token);
            login();
        } catch (error: unknown) {
            setError((error as Error).message || "Sign Up failed");
        } finally {
            setLoading(false);
        }
    };

    return { signUp, loading, error };
};

export default useSignUp;
