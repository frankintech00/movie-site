import { useState } from "react";
import reactLogo from "../assets/react.svg";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header text="Movie App" />
    </div>
  );
}

export default App;
