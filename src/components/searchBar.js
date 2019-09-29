import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState({ term: ''})

  const inputChangeHandler = (term) => {
    setSearchTerm({term})
    props.onTermChange(term)
  }

  return (
    <div className="searchbar">
      <input onChange={event => inputChangeHandler(event.target.value)} />
    </div>
  )
}

export default SearchBar
