import { Link } from "react-router-dom";

const Post = () => {
    return (
        <div className="container mx-auto border-2 px-6 py-10">
            <div className="lg:flex lg:items-center">
                <img
                    className="h-72 w-full rounded-xl object-cover lg:mx-6 lg:h-72 lg:w-1/3"
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                />

                <div className="mt-6 lg:mx-6 lg:mt-0 lg:w-1/2">
                    <Link
                        to="/details"
                        className="mt-4 block text-2xl font-semibold text-gray-800 hover:underline md:text-3xl"
                    >
                        All the features you want to know
                    </Link>

                    <p className="mt-3 text-sm text-gray-500 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint
                        autem nesciunt, laudantium quia tempore delect
                    </p>

                    <Link
                        to="/details"
                        className="mt-2 inline-block text-blue-500 underline hover:text-blue-400"
                    >
                        Read more
                    </Link>

                    <div className="mt-6 flex items-center">
                        <img
                            className="h-10 w-10 rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt=""
                        />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
