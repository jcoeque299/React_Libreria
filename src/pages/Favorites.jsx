import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

function Favorites() {
  const {favouritedBooks} = useLoaderData()

    return (
      <>
        <ul>
            {
                favouritedBooks.length > 0? (
                    favouritedBooks.map((favouritedBook) => (
                        <li key={favouritedBook.key}>
                            <Link to={`/book/${favouritedBook.key.substr(7)}`}>{favouritedBook.title}</Link>
                            <img src={`https://covers.openlibrary.org/b/id/${favouritedBook.cover_i}-M.jpg`}></img>
                        </li>
                    ))
                ): (<>Sin favoritos</>)
            }
        </ul>
      </>
    )
  }
  
  export default Favorites

  export const loaderFavourites = () => {
    const favouritedBooks = JSON.parse(localStorage.getItem("favouritedBooks")) ?? []
    return {favouritedBooks}
  }