import Post from "../../components/post/Post";

const HomePage = () => {
    return (
        <div className="flex flex-col justify-center gap-5">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-gray-800">WordWander</h1>
                <p className="text-gray-500">Unleash Your Story, Explore Endless Worlds!</p>
            </div>
            <Post />
        </div>
    );
};

export default HomePage;
