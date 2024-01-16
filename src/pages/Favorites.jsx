import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import SearchImage from "../components/SearchImage"

function Favorites() {
  //Las covers estan rotas en la página de favoritos. Solo está la ID, no el enlace completo. Haz que las imagenes se guarden en el localstorage
  const {favouritedBooks} = useLoaderData()
    return (
      <>
        <h2>Favoritos</h2>
        <section className="book-card-group-favourites">
            {
                favouritedBooks.length > 0? (
                    favouritedBooks.map((favouritedBook) => (
                        <article key={favouritedBook.key} className="book-card">
                            <SearchImage cover={favouritedBook.cover_i}/>
                            <p>{favouritedBook.title}</p>
                            <Link to={`/book/${favouritedBook.key.substr(7)}`}>Ver libro</Link>
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