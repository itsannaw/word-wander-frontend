import React, { useState } from "react";
import Pagination from "rc-pagination";
import enUS from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";

import Loader from "../../components/loader/Loader";
import CreatePostModal from "../../components/modal/CreatePostModal";
import Post from "../../components/post/Post";
import Select from "../../components/select/Select";
import usePosts from "../../hooks/posts/usePosts";
import useAuthStore from "../../store/useAuthStore";

interface PostData {
    id: string;
    title: string;
    description: string;
    image_url?: string;
    user: {
        name?: string;
    };
}

interface PostsResponse {
    posts: PostData[];
    total_pages: number;
}

const HomePage: React.FC = () => {
    const { isLoggedIn } = useAuthStore();
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const { isPending, error, data, isFetching } = usePosts(filter, currentPage) as {
        isPending: boolean;
        error: Error | null;
        data: PostsResponse;
        isFetching: boolean;
    };

    if (isPending) return <Loader />;
    if (error) {
        return <div className="mt-20 text-center font-semibold text-red-500">{error?.message}</div>;
    }

    if (isFetching) return <div>Updating...</div>;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <Select value={filter} onChange={setFilter} />
                {isLoggedIn && <CreatePostModal />}
            </div>

            {data.posts.length === 0 ? (
                <div className="text-center">No content...</div>
            ) : (
                data.posts.map((post) => <Post key={post.id} content={post} />)
            )}
            {data.total_pages > 0 && (
                <Pagination
                    className="custom-pagination flex justify-center"
                    current={currentPage}
                    total={data?.total_pages * 10}
                    locale={enUS}
                    simple
                    onChange={(page) => setCurrentPage(page)}
                />
            )}
        </div>
    );
};

export default HomePage;
