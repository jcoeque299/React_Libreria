import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchImage from "./SearchImage"

function SearchResults({results}) {
    const [htmlContent, setHtmlContent] = useState("")

    useEffect(() => {
        if (results) {
            results.forEach((result) => {
                if (!result.cover_i) {
                    result.cover_i = ``
                }
                else {
                    result.cover_i = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`
                }
            })
            setHtmlContent(results)
        }   
    }, [results])
    
    return (
        <>
        <section className="book-card-group">
            {
                htmlContent.length > 0? (
                    htmlContent.map((result) => (
                        <article key={result.key} className="book-card">
                            <SearchImage cover={result.cover_i}/>
                            <p>{result.title}</p>
                            <Link to={`/book/${result.key.substr(7)}`}>Ver libro</Link>
                        </article>
                    ))
                ): (<p className="noResults"></p>)
            }
        </section>
        </>
    )
}

export default SearchResults