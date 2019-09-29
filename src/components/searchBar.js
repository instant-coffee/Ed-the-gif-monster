import React, { useState } from "react";
import "./search-bar.css"

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState({ term: ''})

  const inputChangeHandler = (term) => {
    setSearchTerm({term})
    props.onTermChange(term)
  }

  return (
    <div className="searchbar">
      <input placeholder="Search for all the gifs" onChange={event => inputChangeHandler(event.target.value)} />
    </div>
  )
}

export default SearchBar
