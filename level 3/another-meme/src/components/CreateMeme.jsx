import React, {useState} from "react";
import axios from "axios";

function CreateMeme(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // Memes random image from API
  const [allMemes, setAllMemes] = React.useState([])

   // Make a get request to rettieve memes from API
   React.useEffect(() => {
    async function getMemes() {
        const res = await axios
                            .get("https://api.imgflip.com/get_memes")
                            .then(res => setAllMemes(res.data.data.memes))
      }
    getMemes()
    }, [])

   // Get a random meme image from URL
   function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
      }))
    } 

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
        return {
        ...prevMeme,
        [name]: value
        }
    })
  }

  function handleSubmit(event) {
    props.onAdd(meme)
    setMeme({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    event.preventDefault()
    }

  return (
    <main>
      <h1 className="hero-description">The Fastest Meme Generator on the Planet. Easily add text to memes.</h1>

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
        <button className="form-btn" onClick={getMemeImage} type="reset">
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
</main>
  );
}

export default CreateMeme;
