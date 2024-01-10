import { useLoaderData } from "react-router-dom"

function Book() {

  const addToFavourites = () => {
    let favouritedBooks = localStorage.getItem("favourites") ?? []
    favouritedBooks = [...favouritedBooks, book]
    localStorage.setItem("favouritedBooks", JSON.stringify(favouritedBooks))
  }

  const {book} = useLoaderData()
  const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
  return (
    <>
      <h2>{book.title}</h2>
      <p>{book.author_name}</p>
      <p>{book.ratings_average}</p>
      <img src={coverUrl}></img>
      <button onClick={addToFavourites}>Añadir a favoritos</button>
    </>
  )
}
  
export default Book

export const loaderBook = async({params}) => {
  const data = await fetch(`https://openlibrary.org/search.json?q=${params.key}&fields=key,title,cover_i,ratings_average,author_name`)
  const books = await data.json()
  const book = books.docs.filter((filteredBook) => filteredBook.key === `/works/${params.key}`)[0]
  return {book}
}