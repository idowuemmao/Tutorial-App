import React from "react";
import imag from "../Images/pauline.jpg";
import star1 from "../Images/star1.png";
import star2 from "../Images/star2.png";

const StatePractice = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const [greet, setGreeting] = React.useState("Hello");
  function HandleGreeting() {
    // setGreeting("Hi");
    // if (greet === "Hello") {
    //   setGreeting("Hi");
    // } else {
    //   setGreeting("Hello");
    // }
    greet === "Hello" ? setGreeting("Hi") : setGreeting("Hello");
  }
  function Greeting(name) {
    if (hours > 4 && hours <= 12) {
      timeOfDay = "Morning";
    } else if (hours > 12 && hours <= 17) {
      timeOfDay = "Afternoon";
    } else if (hours > 17 && hours <= 20) {
      timeOfDay = "Evening";
    } else if (hours > 20 && hours <= 4) {
      timeOfDay = "Night";
    }
    return `${greet} ${name}, Good ${timeOfDay}`;
  }

  const [count, setCount] = React.useState(0);
  function minus() {
    setCount((prevCOUNT) => prevCOUNT - 1);
  }
  function add() {
    setCount((prevCOUNT) => prevCOUNT + 1);
  }

  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);
  function addItem() {
    setThingsArray((prevThings) => [
      ...prevThings,
      `Thing ${prevThings.length + 1} `,
    ]);
  }
  const thingElement = thingsArray.map((thing) => <li key={thing}>{thing}</li>);

  const [contact, setContact] = React.useState({
    name: "Grace Peacefull",
    coverImg: imag,
    contact: "1234567890",
    email: "grace@example.com",
    isFavorite: true,
  });
  let starIcon = contact.isFavorite ? star1 : star2;

  function toogleFavourite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <div className="text-center grid gap-4 sm:text-base text-xs pt-4 font-bold italic font-mono">
      <div
        onClick={HandleGreeting}
        className="bg-fuchsia-700 text-white py-2 cursor-pointer rounded-full border-4 border-sky-600"
      >
        {" "}
        {Greeting("Emmanuel")}
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <button
          onClick={minus}
          className="p-2 rounded-full bg-fuchsia-700 text-white"
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          onClick={add}
          className="p-2 rounded-full bg-fuchsia-700 text-white"
        >
          +
        </button>
      </div>
      <div className="grid w-full place-items-center">
        <button
          onClick={addItem}
          className="p-2 rounded-full bg-fuchsia-700 text-white"
        >
          Add Things
        </button>
        {thingElement}
      </div>
      <div className="shadow-lg grid place-items-center w-auto border-2 font-serif text-xs font-thin">
        <img
          alt="contact-img"
          src={contact.coverImg}
          className="rounded-full w-36"
        />
        <img
          src={starIcon}
          onClick={toogleFavourite}
          alt="star"
          className="w-5"
        />
        <h1 className="text-lg">{contact.name}</h1>
        <p>{contact.contact}</p>
        <p>{contact.email}</p>
      </div>
    </div>
  );
};

export default StatePractice;
