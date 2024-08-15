import React from "react";
import notFound from "../../assets/not_found.jpg";
import { useNavigateWithParams } from "../../hooks/useNavigateWithParams";

interface User {
    name?: string;
}

interface PostContent {
    id: string;
    title: string;
    description: string;
    image_url?: string;
    user: User;
}

const Post: React.FC<{ content: PostContent }> = ({ content }) => {
    const { navigateWithParams } = useNavigateWithParams();

    const handleClick = () => {
        navigateWithParams("/details/:id", {
            id: content.id,
        });
    };

    return (
        <div className="container mx-auto rounded-xl border-2 px-6 py-10 dark:border-gray-700">
            <div className="lg:flex lg:items-center">
                <img
                    className="h-72 w-full rounded-xl object-cover lg:mx-6 lg:h-72 lg:w-1/3"
                    src={content.image_url ? `http://localhost:3000${content.image_url}` : notFound}
                    alt=""
                    onError={(e) => {
                        e.currentTarget.src = notFound;
                    }}
                />

                <div className="mt-6 lg:mx-6 lg:mt-0 lg:w-1/2">
                    <button
                        onClick={handleClick}
                        className="mt-4 block text-2xl font-semibold text-gray-800 hover:underline dark:text-gray-200 md:text-3xl"
                    >
                        {content.title}
                    </button>

                    <p className="mt-3 line-clamp-2 text-sm text-gray-500 dark:text-gray-200 md:text-sm">
                        {content.description}
                    </p>

                    <button
                        onClick={handleClick}
                        className="mt-2 inline-block text-indigo-500 underline hover:text-indigo-400"
                    >
                        Read more
                    </button>

                    <div className="mt-6 flex items-center">
                        <div>
                            <h1 className="text-sm text-gray-700 dark:text-gray-300">
                                <b>Author: </b>
                                {content.user.name || "Anonymous"}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
