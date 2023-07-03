import pic from "../Images/Group 77.png";
import MemeData from "./MemeData";

export default function MemeInput() {
  function GetMeme() {
    const randomMe = Math.floor(Math.random() * MemeData.data.memes.length);
    const randomMeme = MemeData.data.memes[randomMe];
    // console.log(randomMeme);
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
      <img src={pic} alt="meme_image" className="border border-black" />
    </div>
  );
}
