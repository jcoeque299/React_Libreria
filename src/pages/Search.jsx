import { useNavigation } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import SearchResults from "../components/SearchResults"
import { useState } from "react"

function Search() {
    const [results, setResults] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const setUrl = queries => {
      const {query, queryType} = queries
      const url = `https://openlibrary.org/search.json?${queryType}=${query.replaceAll(" ","+")}&fields=key,title,cover_i,ratings_average,author_name,id_amazon,first_publish_year,number_of_pages_median,first_sentence`
      sendRequest(url)
    }
    
    const sendRequest = async(url) => {
      setIsLoading(true)
      const data = await fetch(url)
      const books = await data.json()
      setResults(books.docs)
      setIsLoading(false)
    }

    return (
      <>
        <h2>Buscar libro</h2>
        <section className="search-form">
          <SearchForm setUrl = {setUrl}/>
        </section>
          {isLoading ? <div className="loader-container"><span className="loader"></span></div> : null}
          <SearchResults results = {results}/>
      </>
    )
  }
  
  export default Search