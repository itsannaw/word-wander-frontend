import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosSettings";
import { api } from "../../../consts/api";

const DeletePostButton = ({ postId }: { postId: string }) => {
    const navigate = useNavigate();

    const handleDelete = async (postId: string) => {
        try {
            await axiosInstance.delete(api.delete_post(postId));
            alert("Post deleted successfully");
            navigate("/");
        } catch (error) {
            alert("Error deleting post");
            console.error(error);
        }
    };

    return (
        <button className="hover:text-red-500 hover:underline" onClick={() => handleDelete(postId)}>
            Delete
        </button>
    );
};

export default DeletePostButton;
