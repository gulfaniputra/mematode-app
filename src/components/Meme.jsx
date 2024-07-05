import { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
        />
        <button
          className="form-button"
          onClick={getMemeImage}
        >
          Random Meme Image
        </button>
      </div>
      <img
        src={memeImage}
        className="meme-image"
        alt="A meme image placeholder"
      />
    </main>
  );
}
