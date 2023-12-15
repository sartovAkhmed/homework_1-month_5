import axios from 'axios';
import React, { useEffect, useState } from 'react'
import stylles from './Posts.module.scss'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getQuery() {
            try {
                axios.defaults.baseURL = 'https://dummyjson.com/posts'
                const response = await axios({
                    method: 'GET'
                })
                setPosts(response.data.posts)
            }   catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error.response?.data.errText, 'error');
                } else if (error instanceof Error) {
                    console.log(error.message);
                }
            }   
        }
        getQuery()
    }, [])

    return (
        <div className={stylles.page__posts}>
            <div className="container">
                {posts.map((post) => (
                    <div className={stylles.post} key={post.id}>
                        <span>{post.id}</span>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
