import React, { useState } from "react";

// Search component that takes in a prop "search" which is a function
const Search = (props) => {
  // useState hook to keep track of the current value of the search input
  const [searchValue, setSearchValue] = useState("");

  // function to update the searchValue state when the input value changes
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  // function to reset the searchValue state to an empty string
  const resetInputField = () => {
    setSearchValue("");
  };

  // function to call the "search" prop function with the current searchValue and reset the input field
  const callSearchFunction = (e) => {
    e.preventDefault(); // prevent the form from refreshing the page
    props.search(searchValue); // call the "search" prop function with the current searchValue
    resetInputField(); // reset the searchValue state
  };

  return (
    // form element with a search input and a search button
    <form className="search bg-gray-700 w-full flex justify-center py-5">
      <div className="relative">
        <input
          value={searchValue} // set the input value to the current searchValue state
          onChange={handleSearchInputChanges} // call the handleSearchInputChanges function when the input value changes
          placeholder="Search for a movie..." // input placeholder text
          type="text"
          className="inline-block block w-50% px-3 py-2 mr-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              callSearchFunction(); // call the callSearchFunction function when the enter key is pressed
            }
          }}
        />
        <button
          onClick={callSearchFunction} // call the callSearchFunction function when the button is clicked
          className="inline-block ml-auto bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-teal-700 hover:text-white"
        >
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default Search;
