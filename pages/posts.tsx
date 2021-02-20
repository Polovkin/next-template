import {useState, useEffect} from 'react'
import Head from "next/head";
import {MainLayout} from "../layouts/MainLayout";
import Link from "next/link";
import nav from "../styles/nav.module.scss";
import {useRouter} from "next/router";
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({posts: serverPosts}: PostsPageProps) {
    const [posts, setPost] = useState(serverPosts)

    useEffect(() => {

        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts`)
            const data = await response.json()
            setPost(data)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }


    return (
        <MainLayout>
            <Head>
                <title>Posts Page | Next Course</title>
            </Head>
            <h1>Posts Page</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`}
                              as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
}


Posts.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) {
        return {post: null}
    }

    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost[] = await response.json()
    return {posts}
}
