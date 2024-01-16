import { useState } from "react"

function ContactForm() {

    const [ticket, setTicket] = useState({
        title: "",
        text: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = e => {
        const {name, type, value} = e.target
        setTicket({
            ...ticket,
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
                        value={ticket.title}
                        ></input>
                    </fieldset>
                    <fieldset>
                        <textarea
                        name="text"
                        placeholder="Introduce cuerpo del ticket de soporte"
                        onChange={handleChange}
                        value={ticket.text}
                        >
                        </textarea>
                    </fieldset>
                    <fieldset>
                        <button type="submit">Enviar</button>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default ContactForm