import React from "react";
import picss from "../Images/mary.jpg";
import MemeData from "./MemeData";

export default function MemeInput() {
  const [meme, setMeme] = React.useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    randomImg: picss,
  });
  const [memeImage, setMemeImages] = React.useState(MemeData);
  function GetMeme() {
    const memeArray = memeImage.data.memes;
    const randomMeme = Math.floor(Math.random() * memeArray.length);
    const image = memeArray[randomMeme].pic;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImg: image };
    });
  }

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Top Text" className="border-2 p-2" />
        <input type="text" placeholder="Bottom Text" className="border-2 p-2" />
        <button
          type="submit"
          className="bg-fuchsia-800 col-span-2 text-white p-2 hover:bg-sky-400"
          onClick={GetMeme}
        >
          Get a new meme image
        </button>
      </div>
      <div className="relative grid place-items-center">
        <p className="absolute text-white p-2 bg-fuchsia-800 top-0 text-lg font-mono z-10">
          {meme.topText}
        </p>
        <img
          src={meme.randomImg}
          alt="meme_image"
          className="border relative border-black"
        />
        <p className="absolute bottom-0 text-white p-2 bg-fuchsia-800 text-lg font-mono z-10">
          {meme.bottomText}
        </p>
      </div>
    </div>
  );
}
