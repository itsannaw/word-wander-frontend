import axios from "axios";

const config = {
    baseURL: "http://localhost:3000",
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

export default axiosInstance;
