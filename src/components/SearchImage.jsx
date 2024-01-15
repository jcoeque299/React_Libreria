import { useEffect, useState } from "react"

function SearchImage(cover) {
    
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (cover.cover === "") {
            setIsLoading(false)
        }
    }, [])

    return (
        <>
            {isLoading ? <div className="loading-image"><span className="loader"></span></div> : null}
            <img src={cover.cover} onLoad={() => setIsLoading(false)}></img>
            
        </>
    )
}
//
export default SearchImage