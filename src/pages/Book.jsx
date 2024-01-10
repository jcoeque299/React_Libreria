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
        text: "Eliminar de favoritos"
      })
      return
    }
    setFavouriteButton({
      function: addToFavourites,
      text: "Añadir a favoritos"
    })
  }

  const [favouriteButton, setFavouriteButton] = useState({
    function: addToFavourites,
    text: "Añadir a favoritos"
  })

  const {book} = useLoaderData()
  const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
  
  return (
    <>
      <h2>{book.title}</h2>
      <p>{book.author_name}</p>
      <p>{book.ratings_average}</p>
      <img src={coverUrl}></img>
      <button onClick={favouriteButton.function}>{favouriteButton.text}</button>
      <Link to={`https://amazon.com/dp/${book.id_amazon}`}>Ver en Amazon</Link>
    </>
  )
}
  
export default Book

export const loaderBook = async({params}) => {
  const data = await fetch(`https://openlibrary.org/search.json?q=${params.key}&fields=key,title,cover_i,ratings_average,author_name,id_amazon`)
  const books = await data.json()
  const book = books.docs.filter((filteredBook) => filteredBook.key === `/works/${params.key}`)[0]
  book.id_amazon.forEach((amazonKey) => {
    if (amazonKey.trim()) {
      book.id_amazon = amazonKey
    }
  })
  return {book}
}