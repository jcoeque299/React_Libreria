import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import SearchImage from "../components/SearchImage"

function Book() {
  let favouritedBooks = JSON.parse(localStorage.getItem("favouritedBooks")) ?? []
  
  const addToFavourites = () => {
    favouritedBooks = [...favouritedBooks, book]
    localStorage.setItem("favouritedBooks", JSON.stringify(favouritedBooks))
    setFavouriteButton({
      function: removeFromFavourites,
      src: "/starred.png"
    })
  }

  const removeFromFavourites = () => {
    favouritedBooks = favouritedBooks.filter((removeBook) => {removeBook.key !== `/works/${book.key}`})
    localStorage.setItem("favouritedBooks", JSON.stringify(favouritedBooks))
    setFavouriteButton({
      function: addToFavourites,
      src: "/notStarred.png"
    })
  }

  const [favouriteButton, setFavouriteButton] = useState({
    function: addToFavourites,
    src: "/notStarred.png"
  })

  useEffect(() => {
    if (favouritedBooks.some((checkBook)=> checkBook.key === book.key)) {
      setFavouriteButton({
        function: removeFromFavourites,
        src: "/starred.png"
      })
      return
    }
    setFavouriteButton({
      function: addToFavourites,
      src: "/notStarred.png"
    })
  }, [])

  const {book} = useLoaderData()
  
  return (
    <>
      <section className="book-info">
        <aside className="book-info-image">
        <SearchImage cover={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}/>
        </aside>
        <article className="book-info-content">
          <h2>{book.title}</h2>
          <h3>{book.author_name[0]}</h3>
          <p>{book.first_sentence}</p>
          <p>Valoracion: {book.ratings_average}/5</p>
          <p>Año: {book.first_publish_year}</p>
          <p>Páginas: {book.number_of_pages_median}</p>
        </article>
        <aside className="book-info-buttons">
          <button onClick={favouriteButton.function}><img src={favouriteButton.src}></img></button>
          {book.id_amazon ? <Link to={`https://amazon.com/dp/${book.id_amazon}`} target="_blank"><img src="/amazon.png" id="amazonButton"></img></Link> : null}
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
  if (book.id_amazon) {
    book.id_amazon.forEach((amazonKey) => {
      if (amazonKey.trim()) {
        book.id_amazon = amazonKey
      }
    })
  }
  return {book}
}