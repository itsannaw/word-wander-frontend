const CommentForm = () => {
    return (
        <div className="mx-auto flex max-w-3xl justify-center py-1 xl:px-8">
            <div className="mt-16 w-full md:mt-0">
                <form className="relative z-10 h-auto overflow-hidden rounded-lg p-8 px-7 py-10">
                    <h3 className="mb-6 text-center text-xl font-semibold text-gray-800 dark:text-gray-300">
                        Write a comment
                    </h3>
                    <textarea
                        name="comment"
                        className="mb-4 w-full rounded-lg border-[2px] border-gray-500 px-4 py-3 focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-300 dark:text-black"
                        placeholder="Write your comment"
                    />
                    <button
                        type="submit"
                        value="Submit comment"
                        name="submit"
                        className="flex justify-end rounded-lg bg-indigo-500 px-4 py-3 text-white"
                    >
                        Submit comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
