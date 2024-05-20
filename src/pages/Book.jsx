import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import SearchImage from "../components/SearchImage"

function Book() {

  const [button, setButton] = useState(true)

  const [ratingValue, setRatingValue] = useState({
    value: ""
  })

  const getFavourited = async(bookId) => {
    const data = await fetch(`http://localhost:8000/api/saved`, {
        method: "get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        },
    })
    const response = await data.json()
    console.log(response)
    if (response.find(saved => saved.bookId === bookId.substr(7))){
      setButton(false)
      return
    }
    setButton(true)
  }
  
  const addToFavourites = async(bookId, bookTitle, bookCover) => {
      const data = await fetch(`http://localhost:8000/api/saved/${bookId}`, {
          method: "post",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          },
          body: JSON.stringify({
            bookTitle: bookTitle,
            bookCover: bookCover
        })
      })
      getFavourited(book.key)
  }

  const removeFromFavourites = async(bookId) => {
    const data = await fetch(`http://localhost:8000/api/saved/${bookId.substr(7)}`, {
          method: "delete",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          },
      })
      getFavourited(book.key)
  }

  const sendRating = async(e, bookId) => {
    setRatingValue({value: e.target.value})
    const data = await fetch(`http://localhost:8000/api/ratings/${bookId.substr(7)}`, {
          method: "post",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          },
          body: JSON.stringify({
            score: e.target.value
        })
      })
  }

  useEffect(() => {
    getFavourited(book.key)
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
          <p>Valoracion: {book.ratings.score}</p>
          <p>Año: {book.first_publish_year}</p>
          <p>Páginas: {book.number_of_pages_median}</p>
          <label htmlFor="score">Valorar:</label>
          <select name="score" value={ratingValue.value} onChange={(e) => sendRating(e, book.key)}>
            <option value="" selected disabled>-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </article>
        <aside className="book-info-buttons">
          {button ? <button onClick={() => addToFavourites(book.key.substr(7),book.title, book.cover_i)}><img src="/notStarred.png"></img></button> : <button onClick={() => removeFromFavourites(book.key)}><img src="/starred.png"></img></button>}
          {book.id_amazon ? <Link to={`https://amazon.com/dp/${book.id_amazon}`} target="_blank"><img src="/amazon.png" id="amazonButton"></img></Link> : null}
        </aside> 
      </section>    
    </>
  )
}
  
export default Book

export const loaderBook = async({params}) => {
  const bookData = await fetch(`https://openlibrary.org/search.json?q=${params.key}&fields=key,title,cover_i,ratings_average,author_name,id_amazon,first_publish_year,number_of_pages_median,first_sentence`)
  const books = await bookData.json()
  const book = books.docs.filter((filteredBook) => filteredBook.key === `/works/${params.key}`)[0]
  if (book.id_amazon) {
    book.id_amazon.forEach((amazonKey) => {
      if (amazonKey.trim()) {
        book.id_amazon = amazonKey
      }
    })
  }
  const ratingData = await fetch(`http://localhost:8000/api/ratings/${params.key}`, {
            method: "get",
  })
  const ratings = await ratingData.json()
  book.ratings = ratings
  return {book}
}