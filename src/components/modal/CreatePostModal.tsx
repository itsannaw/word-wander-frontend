import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../consts/api";
import axiosInstance from "../../api/axiosSettings";

interface FormData {
    title: string;
    description: string;
    image: FileList;
}

const CreatePostModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm<FormData>();

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const onSubmit = async (data: FormData) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("image", data.image[0]);

        try {
            await axiosInstance.post(api.create_post, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            reset();
            toggleModal();
            window.location.reload();
        } catch (error) {
            console.error("There was an error submitting the post!", error);
        }
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="block rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                type="button"
            >
                Create post
            </button>

            {isOpen && (
                <div
                    id="authentication-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
                >
                    <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
                    <div className="relative max-h-full w-full max-w-md p-4">
                        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Create a new post
                                </h3>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="h-3 w-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label
                                            htmlFor="title"
                                            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                            placeholder="Post title"
                                            required
                                            {...register("title")}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={4}
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                            placeholder="Write your description here..."
                                            required
                                            {...register("description")}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                                            htmlFor="file_input"
                                        >
                                            Upload file
                                        </label>

                                        <input
                                            type="file"
                                            id="file-input"
                                            placeholder="Upload file"
                                            accept="image/jpeg, image/png"
                                            required
                                            {...register("image")}
                                            className="block w-full text-sm text-gray-500 file:me-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700 file:disabled:pointer-events-none file:disabled:opacity-50 dark:text-neutral-500 dark:file:bg-indigo-500 dark:hover:file:bg-indigo-400"
                                        />
                                        <p
                                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                            id="file_input_help"
                                        >
                                            PNG, JPG
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                    >
                                        Create Post
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreatePostModal;
