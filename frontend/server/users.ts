"use server";

interface User {
    email: string;
    id: string;
}

export const get = async () => {
    const data = await fetch(`${process.env.APP_URL}/users`);
    const json = await data.json();
    return json.data();
};