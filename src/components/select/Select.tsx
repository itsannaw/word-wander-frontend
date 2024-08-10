const Select = () => {
    return (
        <form className="w-full max-w-xs">
            <label
                htmlFor="sort"
                className="mb-[5px] block text-sm font-medium text-gray-900 dark:text-white"
            >
                Select an option
            </label>
            <select
                id="sort"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
            >
                <option value="all" selected>
                    All posts
                </option>
                <option value="my">My posts</option>
            </select>
        </form>
    );
};

export default Select;
