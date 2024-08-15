import useAuthStore from "../../../store/useAuthStore";

const LogoutButton = () => {
    const { logout } = useAuthStore();
    return (
        <button
            className="hover:text-indigo-500 hover:underline"
            onClick={() => {
                logout();
            }}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
