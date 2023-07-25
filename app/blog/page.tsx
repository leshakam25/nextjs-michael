"use client";
// import {Metadata} from "next";
import {useEffect, useState} from "react";
import {getAllPosts} from "@/services/getPosts";
import {Posts} from "@/components/Posts";

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) throw new Error("Unable to fetch posts!");

    return response.json();
}

// export const metadata: Metadata = {
//     title: "Blog | Next App",
// };

export default async function Blog() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false))
    }, [])


    return (
        <>
            <h1>Blog page</h1>
            {loading ? (
                <h3>loading...</h3>
            ) : (
                <Posts posts={posts}/>
            )}
        </>
    );
}
