import Pagination from "../../components/pagination/Pagination";
import Post from "../../components/post/Post";
import Select from "../../components/select/Select";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-gray-800">WordWander</h1>
                <p className="text-gray-500">Unleash Your Story, Explore Endless Worlds!</p>
            </div>
            <Select />
            <Post />
            <Pagination />
        </div>
    );
};

export default HomePage;
