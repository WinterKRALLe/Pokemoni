import React, { useState } from 'react'

const Search = (props) => {

    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
      };
    
      const handleInputChange = (e) => {
        setQuery(e.target.value);
      };

      const handleSearch = (query) => {
        // Perform search using query
        console.log(`Searching for "${query}"...`);
      };

  return (
    <form onSubmit={handleSubmit}>
        <input className={props.class} type="search" id="" placeholder="search" value={query} onChange={handleInputChange} />
        <button type="submit">Hledat</button>
    </form>
  )
}

export default Search