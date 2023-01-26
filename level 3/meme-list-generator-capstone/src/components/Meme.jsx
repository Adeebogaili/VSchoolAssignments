import React from "react";
import axios from "axios";
import MemeList from "./MemeList";
import { v4 as uuidv4 } from "uuid";

// Meme functional component that takes in darkMode as a prop
export default function Meme(props) {
  // Initial state for the form inputs, randomImage and id
  const initState = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    id: "",
  };

  // State hook to hold the current form inputs
  const [meme, setMeme] = React.useState(initState);

  // State hook to hold all the memes obtained from the API
  const [allMemes, setAllMemes] = React.useState([]);

  // State hook to hold the created memes
  const [memesArray, setMemesArray] = React.useState([]);

  // useEffect to get the memes from the API when the component first renders
  React.useEffect(() => {
    async function getMemes() {
      const res = await axios
        .get("https://api.imgflip.com/get_memes")
        .then((res) => setAllMemes(res.data.data.memes));
    }
    getMemes();
  }, []);

  // Function to get a new random image from the allMemes array
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // Map function to render each meme as a MemeList component
  const memes = memesArray.map((meme, index) => {
    return (
      <MemeList
        key={index}
        {...meme}
        deleteMeme={deleteMeme}
        updateMeme={updateMeme}
      />
    );
  });

  // Function to handle changes in the form inputs
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  // Function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    
      // Create a new meme object with the current meme state and a unique id
      const newMeme = { ...meme };
      newMeme.id=uuidv4()
      // Add the new meme to the memesArray state
      setMemesArray((prevMemesArray) => [...prevMemesArray, newMeme]);
    // Reset the meme state to its initial state
    setMeme(initState);
  }

// deleteMeme is a function that takes in an id as a parameter and deletes the meme with that id from the memesArray.
// it updates the state of the memesArray by filtering out the meme with the matching id.

function deleteMeme(id) {
  setMemesArray((prevMemesArray) =>
    prevMemesArray.filter((meme) => meme.id !== id)
  );
}

// updateMeme is a function that takes in an id, a new top text and a new bottom text as parameters.
// It updates the meme in the memesArray that has the matching id with the new top and bottom text.
// It first maps through the memesArray and if the current meme has the same id as the passed in id
// it returns a new object that is a copy of the current meme with the new top and bottom text.
// If the current meme does not have the same id it is returned as is.
// Then it updates the state of the memesArray with the updatedMeme.

function updateMeme(id, newTopText, newBottomText) {
  const updatedMeme = memesArray.map((meme) => {
    if (id === meme.id) {
      return {
        ...meme,
        topText: newTopText,
        bottomText: newBottomText,
      };
    }
    return meme;
  });
  setMemesArray(updatedMeme);
}

// The main JSX being returned by the component
return (
  <main className={props.darkMode ? "dark" : ""} >
    <h1 className="hero-description">
      The Fastest Meme Generator on the Planet. Easily add text to memes.
    </h1>
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Top text"
        className="form-input"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Bottom text"
        className="form-input"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
      />
      <button className="form-btn" onClick={getMemeImage} type="button">
        Get a new meme image <i className="fa-solid fa-shuffle"></i>
      </button>
      <button className="submit-btn" type="submit">
        Submit <i className="fa-solid fa-paper-plane"></i>
      </button>
    </form>
    <div className="meme-wrapper">
      <img className="random-image image" src={meme.randomImage} alt="" />
      <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
      {/* This div used to display all of the created memes using the map function and the MemeList component */}
      <div className="memes-container">{memes}</div>
    </main>
  );
}
