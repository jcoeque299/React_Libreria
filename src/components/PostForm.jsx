import { useState } from "react"
import { useNavigate } from "react-router-dom"

function PostForm() {

    let posts = JSON.parse(localStorage.getItem("posts")) ?? []

    const navigate = useNavigate()

    const [post, setPosts] = useState({
        title: "",
        text: ""
    })

    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = await fetch(`http://localhost:8000/api/posts`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
            body: JSON.stringify({
                title: post.title,
                text: post.text
            })
        })
        return navigate(`/forum`)
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
            <section className="form">   
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <input
                        name="title"
                        placeholder="Introduce asunto"
                        type="text"
                        onChange={handleChange}
                        value={post.title}
                        ></input>
                    </fieldset>
                    <fieldset>
                        <textarea
                        name="text"
                        placeholder="Introduce cuerpo del post"
                        onChange={handleChange}
                        value={post.text}
                        >
                        </textarea>
                    </fieldset>
                    <fieldset>
                        <button type="submit">Publicar</button>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default PostForm