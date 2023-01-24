import React from "react"; // Importing the React library

// Defining a functional component called "Header"
// It takes in a single prop called "props"
const Header = (props) => {
  // The component returns a JSX element
  // which is a header with a class name of "App-header"
  // Inside the header, there is an h2 element
  // The text inside the h2 element is determined by the "text" prop passed in by App.jsx

  return (
    <header className="App-header flex justify-center items-center text-5xl font-inter text-gray-100 tracking-wider py-10 uppercase font-semibold bg-gray-900 drop-shadow-xl mb-10">
      <h2>{props.text}</h2>
    </header>
  );
};

// Exporting the Header component for use in other files
export default Header;
