import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SearchResults({results}) {
    const [htmlContent, setHtmlContent] = useState("")

    useEffect(() => {
        if (results) {
            setHtmlContent(results)
            console.log(results)
            console.log("Actualizando")
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
                        </li>
                    ))
                ): (<>Sin resultados</>)
            }
        </ul>
        </>
    )
}

export default SearchResults