import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchBarProps> = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
    console.log(searchTerm)
  };

  return (
    <form onSubmit={handleSearch}>
    <input
      type="text"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      placeholder="Search..."
    />
    <button type="submit">Search</button>
    </form>
  )
}

export default Search