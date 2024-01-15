import { useState } from "react"

function ResponseForm(postID) {

    const posts = JSON.parse(localStorage.getItem("posts")) ?? []

    const [response, setResponse] = useState({
        id: "",
        text: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
        const saveResponse = {
            id: new Date().getTime(),
            text: response.text
        }
        posts.forEach((post) => {
            if (post.id === parseInt(postID.postID)) {
                post.responses = [...post.responses, saveResponse]
            }
        })
        localStorage.setItem("posts", JSON.stringify(posts))
    }

    const handleChange = e => {
        const {name, type, value} = e.target
        setResponse({
            ...response,
            [name]:type === "text"? value:value
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea
                name="text"
                placeholder="Introduce cuerpo de la respuesta"
                onChange={handleChange}
                value={response.text}
                >
                </textarea>
                <button type="submit">Responder</button>
            </form>
        </>
    )
}

export default ResponseForm