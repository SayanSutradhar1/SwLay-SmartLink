export interface User{
    _id: string;
    name: string;
    email: string;
    username: string;
    links: {
        handle: string;
        url: string;
    }[];
}