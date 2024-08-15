import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosInstance from "../../api/axiosSettings";
import { api } from "../../consts/api";

const usePosts = (filter: string, page: number) => {
    return useQuery({
        queryKey: ["posts", filter, page],
        queryFn: async () => {
            try {
                const response = await axiosInstance.get(api.get_posts, {
                    params: { filter, page, per_page: 5 },
                });
                return response.data;
            } catch (error) {
                if (error instanceof AxiosError) {
                    throw new Error(error.response?.data?.error || "An error occurred");
                } else {
                    throw new Error("An unknown error occurred");
                }
            }
        },
    });
};

export default usePosts;
