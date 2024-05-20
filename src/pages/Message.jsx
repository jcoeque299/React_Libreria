import { useLoaderData } from "react-router-dom"

function Message() {

    const message = useLoaderData()

    return (
        <>
            <h2>{message.name}</h2>
            <h3>{message.title}</h3>
            <p>{message.text}</p>
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