import axios from 'axios'
import React, { useEffect, useState } from 'react'
import stylles from './CreatePosts.module.scss'

export const CreatePosts = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    // const [getQuery, setGetQuery] = useState(false)
    const [posts, setPosts] = useState([])
    axios.defaults.baseURL = 'https://656c7379e1e03bfd572e5367.mockapi.io/post'

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await axios({
                    method: 'GET',
                })
                setPosts(response.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error.response?.data.errText, 'error');
                } else if (error instanceof Error) {
                    console.log(error.message);
                }
            }  
        }
        getPosts()
    }, [])

    async function handlerSubmit(event) {
        // setGetQuery(!getQuery)
        event.preventDefault()
        try {
            await axios({
                method: 'POST',
                data: {
                    title: title,
                    body: body
                }
            })
            const response = await axios({
                method: 'GET',
            })
            setPosts(response.data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data.errText, 'error');
            } else if (error instanceof Error) {
                console.log(error.message);
            }
        }   
    }
    return (
        <div className={stylles.page__post}>
            <div className="container">
                <form onSubmit={handlerSubmit}>
                    <input value={title} type="text" 
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder='enter title' />
                    <input value={body} type="text" 
                        onChange={(event) => setBody(event.target.value)}
                        placeholder='enter body' />
                    <button type='submit'>added post</button>
                </form>
                <div className={stylles.posts}>
                    {posts.map((post) => (
                        <div className={stylles.post} key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
