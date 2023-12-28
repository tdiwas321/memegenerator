import { useState } from "react";
import data from "../memeData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(data)

  function randomMeme() {
    let random = Math.floor(allMemeImages.data.memes.length * Math.random());
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemeImages.data.memes[random].url,
    }));
    console.log(meme);
  }
  return (
    <div className="memeContainer">
      <div className="memeForm">
        <div className="memeInputContainer">
          <div className="memeInput">
            <label>Top text</label>
            <input></input>
          </div>
          <div className="memeInput">
            <label>Bottom text</label>
            <input></input>
          </div>
        </div>
        <button className="memeBtn" onClick={randomMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="imgContainer">
        <img src={meme.randomImage} alt="image" className="memeImage" />
      </div>
    </div>
  );
}
