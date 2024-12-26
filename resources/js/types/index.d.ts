export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    email_verified_at?: string;
    role: string;
    image?: string;
    created_at: string;
    updated_at: string;
    posts: Post[];
}

export interface Post {
    id: number;
    user_id: number;
    title: string;
    content: string;
    slug: string;
    created_at: string;
    updated_at: string;
    user: User;

}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

