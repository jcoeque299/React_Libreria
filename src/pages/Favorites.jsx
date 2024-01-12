import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

function Favorites() {
  const {favouritedBooks} = useLoaderData()
    return (
      <>
        <section className="book-card-group-favourites">
            {
                favouritedBooks.length > 0? (
                    favouritedBooks.map((favouritedBook) => (
                        <article key={favouritedBook.key} className="book-card">
                            <img src={favouritedBook.cover_i}></img>
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