import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SearchResults({results}) {
    const [htmlContent, setHtmlContent] = useState("")

    useEffect(() => {
        if (results) {
            setHtmlContent(results)
        }   
    }, [results])
    
    return (
        <>
        <ul>
            {
                htmlContent.length > 0? (
                    htmlContent.map((result) => (
                        <li key={result.key}>
                            <Link to={`/book/${result.key.substr(7)}`}>{result.title}</Link>
                            <img src={`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`}></img>
                        </li>
                    ))
                ): (<>Sin resultados</>)
            }
        </ul>
        </>
    )
}

export default SearchResults