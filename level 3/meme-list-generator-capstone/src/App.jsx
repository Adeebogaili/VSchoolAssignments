import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

function App() {
  
  // state for tracking the current dark mode status
  const [darkMode, setDarkMode] = React.useState(false);

  // function for toggling the dark mode
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
