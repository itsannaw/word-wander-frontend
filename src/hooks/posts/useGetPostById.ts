import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosSettings";
import { api } from "../../consts/api";

const useGetPostById = (id: string) => {
    return useQuery({
        queryKey: ["post", id],
        queryFn: async () => {
            const response = await axiosInstance.get(api.get_post_by_id(id));
            return response.data;
        },
    });
};

export default useGetPostById;
