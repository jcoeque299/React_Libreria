import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

function Message() {

    const message = useLoaderData()

    return (
        <>
        <section className="message">
            <article className="message-info">
                <Link to={`/profile/${message.name}`}><h3>{message.name}</h3></Link>
                <h4>{message.title}</h4>
                <p>{message.text}</p>
            </article>
        </section>     
        </>
    )
}

export const loaderMessage = async({params}) => {
    const data = await fetch(`http://localhost:8000/api/messages/${params.id}`, {
            method: "get",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
    })
    const response = await data.json()
    console.log(response)
    return response
}

export default Message