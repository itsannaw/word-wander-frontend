export const api = {
    login: "/auth/sign_in",
    signup: "/auth",
    logout: "/auth/sign_out",
    get_posts: "/posts",
    create_post: "/posts",
    delete_post: (id: string) => `/posts/${id}`,
    update_post: (id: string) => `/posts/${id}`,
    get_post_by_id: (id: string) => `/posts/${id}`,
    create_comment: "/comments",
    delete_comment: (id: string) => `/comments/${id}`,
};
