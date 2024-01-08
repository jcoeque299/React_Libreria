import { useState } from "react"



function SearchForm({setUrl}) {
    const [queries, setQueries] = useState({
        query: "a",
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
                <input
                    name="query"
                    placeholder="Introduce titulo"
                    type="text"
                    onChange={handleChange}
                    value={queries.query}
                ></input>
                <select
                    name="queryType"
                    value={queries.queryType}
                    onChange={handleChange}
                >
                    <option value="title">Titulo</option>
                    <option value="author">Autor</option>
                </select>
                <button
                    type="submit"
                >Buscar</button>
            </form>
        </>
    )
}

export default SearchForm