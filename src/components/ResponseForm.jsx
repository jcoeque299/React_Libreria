import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ResponseForm(postID) {

    const postid = postID.postID

    const navigate = useNavigate()

    const [response, setResponse] = useState({
        text: ""
    })

    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = await fetch(`http://localhost:8000/api/comments/${postid}`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
            body: JSON.stringify({
                text: response.text
            })
        })
        const responseA = await data.json()
        return navigate(`/post/${postid}`)
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