import Pagination from "../../components/pagination/Pagination";
import Post from "../../components/post/Post";
import Select from "../../components/select/Select";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-6">
            <Select />
            <Post />
            <Post />
            <Pagination />
        </div>
    );
};

export default HomePage;
