import { Link, useParams } from "react-router-dom";
import CommentForm from "../../components/comments/CommentForm";
import CommentsSection from "../../components/comments/CommentsSection";
import useGetPostById from "../../hooks/posts/useGetPostById";
import { formatCreatedAt } from "../../helpers/data";
import notFound from "../../assets/not_found.jpg";
import DeletePostButton from "../../components/buttons/delete-post/DeletePostButton";
import EditPostModal from "../../components/modal/EditPostModal";

const PostDetails = () => {
    const { id } = useParams();
    const currentUser = localStorage.getItem("userId");

    const { isPending, error, data, isFetching } = useGetPostById(id || "");

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    if (isFetching) return <div>Updating...</div>;

    return (
        <section className="mt-10">
            <Link className="absolute hover:text-indigo-500 hover:underline" to="/">
                ← Back to Home
            </Link>
            {currentUser == data?.user_id && (
                <div className="absolute right-16 flex items-center gap-4">
                    <EditPostModal postData={data} />
                    <DeletePostButton postId={data?.id} />
                </div>
            )}
            <div
                className="relative mx-auto mb-4 w-full max-w-screen-md md:mb-0"
                style={{ height: "24em" }}
            >
                <div
                    className="absolute bottom-0 left-0 z-10 h-full w-full"
                    style={{
                        backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                    }}
                ></div>
                <img
                    src={data.image_url ? `http://localhost:3000/${data?.image_url}` : notFound}
                    className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                    alt="Blog Cover"
                    onError={(e) => {
                        e.currentTarget.src = notFound;
                    }}
                />
                <div className="absolute bottom-0 left-0 z-20 p-4">
                    <h2 className="text-4xl font-semibold leading-tight text-gray-100">
                        {data?.title}
                    </h2>
                    <div className="mt-3 flex">
                        <div>
                            <p className="text-sm font-semibold text-gray-200">
                                {data?.user.name || "Anonymous"}
                            </p>
                            <p className="text-xs font-semibold text-gray-400">
                                {formatCreatedAt(data?.created_at)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-screen-md px-4 indent-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 lg:px-0">
                {data?.description}
            </div>
            <CommentForm />
            <p className="mt-1 text-left text-xl font-semibold text-gray-800 dark:text-gray-300 sm:mx-0 sm:text-center">
                All comments on this post
            </p>
            {data?.comments.length > 0 ? (
                <CommentsSection comments={data?.comments} />
            ) : (
                <div className="text-md mx-auto mt-4 px-4 text-center leading-relaxed text-gray-700 dark:text-gray-300 lg:px-0">
                    No comments...
                </div>
            )}
        </section>
    );
};

export default PostDetails;
