import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import axiosInstance from "../../api/axiosSettings";
import { api } from "../../consts/api";
import { SignUpFormValues } from "../../types/auth";
import { AxiosError } from "axios";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuthStore.getState();

    const signUp = async (userData: SignUpFormValues) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post(api.signup, userData);
            localStorage.setItem("token", response.headers["authorization"]);
            localStorage.setItem("userId", response.data.data.id);
            login();
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data?.errors.full_messages || "An error occurred");
            } else {
                throw new Error("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return { signUp, loading, error };
};

export default useSignUp;
