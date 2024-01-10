import SearchForm from "../components/SearchForm"
import SearchResults from "../components/SearchResults"
import { useState } from "react"

function Search() {
    const [results, setResults] = useState("")

    const setUrl = queries => {
      const {query, queryType} = queries
      const url = `https://openlibrary.org/search.json?${queryType}=${query.replaceAll(" ","+")}`
      sendRequest(url)
    }
    
    const sendRequest = async(url) => {
      const data = await fetch(url)
      const books = await data.json()
      setResults(books.docs)
      console.log(results)
    }

    return (
      <>
        <SearchForm setUrl = {setUrl}/>
        <SearchResults results = {results}/>
      </>
    )
  }
  
  export default Search