import { useLoaderData } from "react-router-dom"

function Book() {
  const {book} = useLoaderData()
  const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
  console.log(coverUrl)
  return (
    <>
      <h2>{book.title}</h2>
      <p>{book.author_name}</p>
      <p>{book.ratings_average}</p>
      <img src={coverUrl}></img>
    </>
  )
}
  
export default Book

export const loaderBook = async({params}) => {
  const data = await fetch(`https://openlibrary.org/search.json?q=${params.key}`)
  const books = await data.json()
  const book = books.docs.filter((filteredBook) => filteredBook.key === `/works/${params.key}`)[0]
  console.log(book)
  return {book}
}