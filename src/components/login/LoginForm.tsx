import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="relative z-10 flex w-full max-w-[500px] flex-col items-start justify-start rounded-xl bg-white pb-10 pl-10 pr-10 pt-10 shadow-2xl">
            <p className="w-full text-center font-serif text-4xl font-medium leading-snug">Login</p>
            <div className="relative mb-0 ml-0 mr-0 mt-6 w-full space-y-8">
                <div className="relative">
                    <p className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600">
                        Email
                    </p>
                    <input
                        placeholder="123@ex.com"
                        type="text"
                        className="mb-0 ml-0 mr-0 mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400 focus:border-black focus:outline-none"
                    />
                </div>
                <div className="relative">
                    <p className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600">
                        Password
                    </p>
                    <input
                        placeholder="Password"
                        type="password"
                        className="mb-0 ml-0 mr-0 mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400 focus:border-black focus:outline-none"
                    />
                </div>
                <div className="relative">
                    <button className="ease inline-block w-full rounded-lg bg-indigo-500 pb-4 pl-5 pr-5 pt-4 text-center text-xl font-medium text-white transition duration-200 hover:bg-indigo-600">
                        Submit
                    </button>
                </div>
            </div>
            <span className="mt-4 flex w-full justify-center gap-2 bg-white font-medium text-gray-600">
                Don't have an account?
                <Link className="text-indigo-500" to="/signup">
                    Sign up
                </Link>
            </span>
        </div>
    );
};

export default LoginForm;
