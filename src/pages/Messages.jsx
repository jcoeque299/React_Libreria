import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

function Messages() {

    const messages = useLoaderData()

    return (
        <>
        <h2>Mensajes</h2>
        <section className="message">
        {
            messages.length > 0? (
                    messages.map((message) => (
                        <article key={message.id} className="message-info">
                            <h3>{message.name}</h3>
                            <h4>{message.title}</h4>
                            <Link to={`/message/${message.id}`}>Ver mensaje</Link>
                        </article>
                    ))
                ): (<p className="noResults">No hay mensajes</p>)
            }
        </section>
        </>
    )
}

export const loaderMessages = async() => {
    const data = await fetch(`http://localhost:8000/api/messages`, {
            method: "get",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
    })
    const response = await data.json()
    return response
}

export default Messages