import React from "react";
import axiosInstance from "../../api/axiosSettings";
import { api } from "../../consts/api";
import { formatCreatedAt } from "../../helpers/data";

interface Comment {
    id: string;
    body: string;
    created_at: string;
    user_id: string;
    user?: {
        name?: string;
    };
}

interface CommentsSectionProps {
    comments: Comment[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
    const currentUser = localStorage.getItem("userId");

    const handleDelete = async (commentId: string) => {
        try {
            await axiosInstance.delete(api.delete_comment(commentId));
            alert("Comment deleted successfully");
            window.location.reload();
        } catch (error) {
            alert("Error deleting comment");
            console.error(error);
        }
    };

    return (
        <div className="mx-auto mt-5 flex max-w-2xl flex-col gap-4">
            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className="mx-auto flex w-full items-center border-b-2 pb-6 dark:border-gray-600"
                >
                    <div>
                        <h3 className="text-lg font-semibold text-indigo-500">
                            {comment.user?.name || "Anonymous"}
                        </h3>
                        <p className="text-sm text-gray-400">
                            {formatCreatedAt(comment.created_at)}
                        </p>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                            {comment.body}
                        </p>
                    </div>
                    {currentUser === comment.user_id && (
                        <button
                            className="ml-auto text-red-500 hover:underline"
                            onClick={() => handleDelete(comment.id)}
                        >
                            Delete
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommentsSection;
