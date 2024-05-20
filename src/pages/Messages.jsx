import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

function Messages() {

    const messages = useLoaderData()

    return (
        <>{
            messages.length > 0? (
                    messages.map((message) => (
                        <article key={message.id}>
                            <h2>{message.name}</h2>
                            <h3>{message.title}</h3>
                            <Link to={`/message/${message.id}`}>Ver mensaje</Link>
                        </article>
                    ))
                ): (<p className="noResults"></p>)
            }</>
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