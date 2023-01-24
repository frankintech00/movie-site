import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search bg-gray-700 w-full flex justify-center py-5">
      <div className="relative">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          placeholder="Search for a movie..."
          type="text"
          className="inline-block block w-50% px-3 py-2 mr-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              callSearchFunction();
            }
          }}
        />
        <button
          onClick={callSearchFunction}
          className="inline-block ml-auto bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-teal-700 hover:text-white"
        >
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default Search;
