import React from "react";

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
  return (
    <div className="text-center sm:text-base text-xs pt-4 font-bold text-fuchsia-700 italic font-mono">
      <div onClick={HandleGreeting}> {Greeting("Emmanuel")}</div>
      <div className="flex pt-2 items-center justify-center gap-2 text-2xl">
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
    </div>
  );
};

export default StatePractice;
