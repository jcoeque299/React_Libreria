import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

function Book() {
  let favouritedBooks = localStorage.getItem("favourites") ?? []
  
  const addToFavourites = () => {
    favouritedBooks = [...favouritedBooks, book]
    localStorage.setItem("favouritedBooks", JSON.stringify(favouritedBooks))
    checkIfFavourited()
  }

  const removeFromFavourites = () => {
    favouritedBooks = favouritedBooks.filter((removeBook) => {removeBook.key !== `/works/${book.key}`})
    localStorage.setItem("favouritedBooks", JSON.stringify(favouritedBooks))
    checkIfFavourited()
  }

  const checkIfFavourited = () => {
    if (favouritedBooks.some((checkBook)=> checkBook.key === book.key)) {
      setFavouriteButton({
        function: removeFromFavourites,
        src: "../images/starred.png"
      })
      return
    }
    setFavouriteButton({
      function: addToFavourites,
      src: "../images/notStarred.png"
    })
  }

  const [favouriteButton, setFavouriteButton] = useState({
    function: addToFavourites,
    src: "../images/notStarred.png"
  })

  const {book} = useLoaderData()
  const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
  
  return (
    <>
      <section className="book-info">
        <aside className="book-info-image">
        <img src={coverUrl}></img>
        </aside>
        <article className="book-info-content">
          <h2>{book.title}</h2>
          <h3>{book.author_name}</h3>
          <p>{book.first_sentence}</p>
          <p>Valoracion: {book.ratings_average}/5</p>
          <p>Año: {book.first_publish_year}</p>
          <p>Páginas: {book.number_of_pages_median}</p>
        </article>
        <aside className="book-info-buttons">
          <button onClick={favouriteButton.function}><img src={favouriteButton.src}></img></button>
          <Link to={`https://amazon.com/dp/${book.id_amazon}`}><img src="../images/amazon.png" id="amazonButton"></img></Link>
        </aside> 
      </section>    
    </>
  )
}
  
export default Book

export const loaderBook = async({params}) => {
  const data = await fetch(`https://openlibrary.org/search.json?q=${params.key}&fields=key,title,cover_i,ratings_average,author_name,id_amazon,first_publish_year,number_of_pages_median,first_sentence`)
  const books = await data.json()
  const book = books.docs.filter((filteredBook) => filteredBook.key === `/works/${params.key}`)[0]
  book.id_amazon.forEach((amazonKey) => {
    if (amazonKey.trim()) {
      book.id_amazon = amazonKey
    }
  })
  return {book}
}