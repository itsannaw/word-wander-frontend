const CommentsSection = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto max-w-2xl">
            <p className="mt-1 text-left text-xl font-semibold text-gray-800 sm:mx-0 sm:text-center">
                All comments on this post
            </p>
            {/* Comment 1 */}
            <div className="mx-auto flex w-full items-center border-b-2 pb-6">
                <div>
                    <h3 className="text-lg font-semibold text-indigo-500">James Amos</h3>
                    <p className="text-sm text-gray-400">August 22, 2021</p>
                    <p className="mt-2 text-lg text-gray-600">
                        Please help with how you did the migrations for the blog database fields. I
                        tried mine using exactly what you instructed but it's not working!!.
                    </p>
                </div>
            </div>
            <div className="mx-auto flex w-full items-center border-b-2 pb-6">
                <div>
                    <h3 className="text-lg font-semibold text-indigo-500">James Amos</h3>
                    <p className="text-sm text-gray-400">August 22, 2021</p>
                    <p className="mt-2 text-lg text-gray-600">
                        Wow! Really good!
                    </p>
                </div>
            </div>
            <div className="mx-auto flex w-full items-center border-b-2 pb-6">
                <div>
                    <h3 className="text-lg font-semibold text-indigo-500">James Amos</h3>
                    <p className="text-sm text-gray-400">August 22, 2021</p>
                    <p className="mt-2 text-lg text-gray-600">
                        Wow! Really good! It's amazing!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CommentsSection;
