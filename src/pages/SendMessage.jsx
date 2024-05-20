import { useState } from "react"
import { useLoaderData } from "react-router-dom"

function SendMessage() {

    const userName = useLoaderData();

    const [message, setMessage] = useState({
        title: "",
        text: ""
    })

    const sendMessage = async(e) => {
        e.preventDefault()
        const data = await fetch(`http://localhost:8000/api/messages/${userName}`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
            body: JSON.stringify({
                title: message.title,
                text: message.text
            })
        })
    }

    const handleChange = e => {
        const {name, type, value} = e.target
        setMessage({
            ...message,
            [name]:type === "text"? value:value
        })
    }

    return (
        <>
            <form onSubmit={sendMessage}>
                <fieldset>
                    <input 
                        name="title"
                        value={message.title}
                        type="title"
                        onChange={handleChange}
                    ></input>
                </fieldset>
                <fieldset>
                    <input 
                        name="text"
                        value={message.text}
                        type="text"
                        onChange={handleChange}
                    ></input>
                </fieldset>
                <fieldset>
                    <button onClick={sendMessage}>Enviar</button>
                </fieldset>        
            </form>
        </>
    )
}

export const loaderSendMessage = async({params}) => {
    return params.userName
}

export default SendMessage