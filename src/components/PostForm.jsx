import { useState } from "react"
import { redirect } from "react-router-dom"

function PostForm() {

    let posts = JSON.parse(localStorage.getItem("posts")) ?? []

    const [post, setPosts] = useState({
        id: "",
        title: "",
        text: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
        const savePost = {
            id: new Date().getTime(),
            title: post.title,
            text: post.text
        }
        console.log(savePost)
        posts = [...posts, savePost]
        localStorage.setItem("posts", JSON.stringify(posts))
    }

    const handleChange = e => {
        const {name, type, value} = e.target
        setPosts({
            ...post,
            [name]:type === "text"? value:value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                name="title"
                placeholder="Introduce asunto"
                type="text"
                onChange={handleChange}
                value={post.title}
                ></input>
                <textarea
                name="text"
                placeholder="Introduce cuerpo del post"
                onChange={handleChange}
                value={post.text}
                >
                </textarea>
                <button type="submit">Publicar</button>
            </form>
        </>
    )
}

export default PostForm