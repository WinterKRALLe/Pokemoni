import React, { useState, useDeferredValue, Suspense, useEffect } from 'react';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredValue = useDeferredValue(searchTerm);
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    if (deferredValue.length > 2) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [deferredValue]);

  const handleSearch = async () => {
    try {
      const response = await fetch("/src/assets/pokemon_names.txt");
      const data = await response.text();
      const filteredResults = data
        .split("\n")
        .filter((name) => name.toLowerCase().includes(deferredValue.toLowerCase())).slice(0, 10);

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  return (
    <div className="max-w-xs w-2/5 relative">
      <input
        className=" w-full py-1 px-2 text-md rounded-lg border-2 border-neutral-300 border-solid focus:outline-none"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search..."
      />
      {searchResults.length > 0 ?
        <Suspense fallback={<h2>Loading...</h2>}>
          <ul className="absolute top-10 w-full bg-neutral-200 rounded-md border-2 border-solid border-neutral-300">
            {searchResults && searchResults.map((res, index) => (
              <li className="p-2 border-b-2 border-solid border-slate-50 hover:bg-neutral-300 last:border-none" key={index}><a className="block" href={res}>{res}</a></li>
            ))}
          </ul>
        </Suspense> : ""}
    </div >
  );
};

export default Search;
