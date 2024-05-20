import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import SearchImage from "../components/SearchImage"
import { useState } from "react"

function Favorites() {
  const favouritedBooks = useLoaderData()

  const [isLoading, setIsLoading] = useState(false)

    return (
      <>
        <h2>Favoritos</h2>
        {isLoading ? <div className="loader-container"><span className="loader"></span></div> : null}
        <section className="book-card-group-favourites">
            {
                favouritedBooks.length > 0? (
                    favouritedBooks.map((favouritedBook) => (
                        <article key={favouritedBook.bookId} className="book-card">
                            <SearchImage cover={`https://covers.openlibrary.org/b/id/${favouritedBook.bookCover}-M.jpg`}/>
                            <p>{favouritedBook.bookTitle}</p>
                            <Link to={`/book/${favouritedBook.bookId}`} onClick={() => setIsLoading(true)}>Ver libro</Link>
                        </article>
                    ))
                ): (<p className="noResults">Sin favoritos</p>)
            }
        </section>
      </>
    )
  }
  
  export default Favorites

  export const loaderFavourites = async() => {
    const data = await fetch(`http://localhost:8000/api/saved`, {
          method: "get",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          },
      })
    const favouritedBooks = await data.json()
    return favouritedBooks
  }