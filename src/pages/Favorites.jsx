import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import SearchImage from "../components/SearchImage"
import { useState } from "react"

function Favorites() {
  //Las covers estan rotas en la página de favoritos. Solo está la ID, no el enlace completo. Haz que las imagenes se guarden en el localstorage
  const {favouritedBooks} = useLoaderData()

  const [isLoading, setIsLoading] = useState(false)

    return (
      <>
        <h2>Favoritos</h2>
        {isLoading ? <div className="loader-container"><span className="loader"></span></div> : null}
        <section className="book-card-group-favourites">
            {
                favouritedBooks.length > 0? (
                    favouritedBooks.map((favouritedBook) => (
                        <article key={favouritedBook.key} className="book-card">
                            <SearchImage cover={`https://covers.openlibrary.org/b/id/${favouritedBook.cover_i}-M.jpg`}/>
                            <p>{favouritedBook.title}</p>
                            <Link to={`/book/${favouritedBook.key.substr(7)}`} onClick={() => setIsLoading(true)}>Ver libro</Link>
                        </article>
                    ))
                ): (<p className="noResults">Sin favoritos</p>)
            }
        </section>
      </>
    )
  }
  
  export default Favorites

  export const loaderFavourites = () => {
    const favouritedBooks = JSON.parse(localStorage.getItem("favouritedBooks")) ?? []
    return {favouritedBooks}
  }