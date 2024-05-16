import { useEffect, useState } from "react"

function SearchImage(cover) {
    
    const [isLoading, setIsLoading] = useState(true)

    const coverURL = cover.cover

    useEffect(() => {
        if (coverURL === "") {
            setIsLoading(false)
        }
    }, [])

    return (
        <>
            {isLoading ? <div className="loading-image"><span className="loader"></span></div> : null}
            <img src={coverURL} onLoad={() => setIsLoading(false)}></img>
            
        </>
    )
}
export default SearchImage