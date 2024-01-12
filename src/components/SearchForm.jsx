import { useState } from "react"



function SearchForm({setUrl}) {
    const [queries, setQueries] = useState({
        query: "",
        queryType: "title"
    })
    
    const handleSubmit = e => {
        e.preventDefault()
        setUrl(queries)
    }

    const handleChange = e => {
        const {name, type, value} = e.target
        setQueries({
            ...queries,
            [name]:type === "text"? value:value
        })
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input
                        name="query"
                        placeholder="Introduce titulo"
                        type="text"
                        onChange={handleChange}
                        value={queries.query}
                    ></input>
                </fieldset>
                <fieldset>
                    <select
                        name="queryType"
                        value={queries.queryType}
                        onChange={handleChange}
                    >
                        <option value="title">Titulo</option>
                        <option value="author">Autor</option>
                    </select>
                </fieldset>
                <fieldset>
                    <button
                        type="submit"
                    >Buscar</button>
                </fieldset>              
            </form>
        </>
    )
}

export default SearchForm