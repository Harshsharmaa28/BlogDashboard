export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    likes?: number;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface Comment {
    id: number;
    postId: number;
    name: string;
    body: string;
}
