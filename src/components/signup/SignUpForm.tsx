import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/auth/useSignUp";
import { emailPattern } from "../../consts/patterns";
import { SignUpFormValues } from "../../types/auth";
import Loader from "../loader/Loader";

const SignUpForm = () => {
    const { signUp, loading, error } = useSignUp();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpFormValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const onSubmit = async (data: SignUpFormValues) => {
        await signUp(data);
        navigate("/");
    };

    return (
        <div className="relative z-10 flex w-full max-w-[500px] flex-col items-start justify-start rounded-xl bg-white pb-10 pl-10 pr-10 pt-10 shadow-2xl dark:bg-gray-700">
            <p className="w-full text-center font-serif text-4xl font-medium leading-snug">
                Sign up for an account
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative mb-0 ml-0 mr-0 mt-6 w-full space-y-8"
            >
                <div className="relative">
                    <p className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                        Name
                    </p>
                    <input
                        placeholder="John"
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className={`mb-0 ml-0 mr-0 mt-2 block w-full rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"} bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400 focus:border-black focus:outline-none dark:border-gray-400 dark:bg-gray-700 dark:focus:border-gray-100`}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div className="relative">
                    <p className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                        Email
                    </p>
                    <input
                        placeholder="123@ex.com"
                        type="text"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: emailPattern,
                                message: "Invalid email address",
                            },
                        })}
                        className={`mb-0 ml-0 mr-0 mt-2 block w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400 focus:border-black focus:outline-none dark:border-gray-400 dark:bg-gray-700 dark:focus:border-gray-100`}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div className="relative">
                    <p className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                        Password
                    </p>
                    <input
                        placeholder="Password"
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        className={`mb-0 ml-0 mr-0 mt-2 block w-full rounded-md border ${errors.password ? "border-red-500" : "border-gray-300"} bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400 focus:border-black focus:outline-none dark:border-gray-400 dark:bg-gray-700 dark:focus:border-gray-100`}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}
                </div>
                <div className="relative">
                    <p className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                        Confirm password
                    </p>
                    <input
                        placeholder="Confirm password"
                        type="password"
                        {...register("password_confirmation", {
                            required: "Confirm password is required",
                            validate: (value) =>
                                value === watch("password") || "The passwords do not match",
                        })}
                        className={`mb-0 ml-0 mr-0 mt-2 block w-full rounded-md border ${errors.password_confirmation ? "border-red-500" : "border-gray-300"} bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400 focus:border-black focus:outline-none dark:border-gray-400 dark:bg-gray-700 dark:focus:border-gray-100`}
                    />
                    {errors.password_confirmation && (
                        <p className="text-sm text-red-500">
                            {errors.password_confirmation.message}
                        </p>
                    )}
                </div>
                <div className="relative">
                    {loading ? (
                        <Loader />
                    ) : (
                        <button
                            type="submit"
                            className="ease inline-block w-full rounded-lg bg-indigo-500 pb-4 pl-5 pr-5 pt-4 text-center text-xl font-medium text-white transition duration-200 hover:bg-indigo-600"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
            {error && (
                <div className="mt-4 flex w-full justify-center text-sm text-red-500">{error}</div>
            )}
            <span className="mt-4 flex w-full justify-center gap-2 font-medium text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                    className="text-indigo-500 hover:underline dark:hover:text-indigo-400"
                    to="/login"
                >
                    Login
                </Link>
            </span>
        </div>
    );
};

export default SignUpForm;
