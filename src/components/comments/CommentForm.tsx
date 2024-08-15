import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosSettings";
import { api } from "../../consts/api";

type CommentFormValues = {
    body: string;
};

const CommentForm = () => {
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CommentFormValues>();

    const onSubmit = async (data: CommentFormValues) => {
        try {
            await axiosInstance.post(api.create_comment, {
                body: data.body,
                post_id: id,
            });
            reset();
            alert("Comment submitted successfully!");
            window.location.reload();
        } catch (error) {
            console.error("There was an error submitting the comment!", error);
            alert("You need to sign in or sign up before continuing.");
        }
    };

    return (
        <div className="mx-auto flex max-w-4xl justify-center py-1 xl:px-12">
            <div className="mt-16 w-full md:mt-0">
                <form
                    className="relative z-10 h-auto overflow-hidden rounded-lg p-8 px-7 py-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className="mb-6 text-center text-xl font-semibold text-gray-800 dark:text-gray-300">
                        Write a comment
                    </h3>
                    <textarea
                        className="mb-4 w-full rounded-lg border-[2px] border-gray-500 px-4 py-3 focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-300 dark:text-black"
                        placeholder="Write your comment"
                        {...register("body", { required: true })}
                    />
                    {errors.body && <span className="text-red-500">This field is required</span>}
                    <button
                        type="submit"
                        className="flex justify-end rounded-lg bg-indigo-500 px-4 py-3 text-white"
                    >
                        Submit comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
