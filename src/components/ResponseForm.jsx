import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ResponseForm(postID) {

    const posts = JSON.parse(localStorage.getItem("posts")) ?? []

    const navigate = useNavigate()

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
        return navigate(`/post/${postID.postID}`)
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
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <textarea
                        name="text"
                        placeholder="Introduce cuerpo de la respuesta"
                        onChange={handleChange}
                        value={response.text}
                        >
                        </textarea>
                    </fieldset>
                    <fieldset>
                        <button type="submit">Responder</button>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default ResponseForm