import SearchForm from "../components/SearchForm"
import SearchResults from "../components/SearchResults"

const setUrl = queries => {
  const {query, queryType} = queries
  const url = `https://openlibrary.org/search.json?${queryType}=${query.replaceAll(" ","+")}`
  sendRequest(url)
}

const sendRequest = async(url) => {
  const data = await fetch(url)
  const books = await data.json()
  console.log(books)
  return books
}

function Search() {
    return (
      <>
        <SearchForm setUrl = {setUrl}/>
        <SearchResults/>
      </>
    )
  }
  
  export default Search