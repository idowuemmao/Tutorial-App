import React from "react";
import MemeNavBar from "./MemeNavBar";
import MemeInput from "./MemeInput";
// import StatePractice from "../StatePractice/StatePractice";
// import Buscard from "../Buscard/Buscard";
import Jokes from "../Jokes/Jokes";
import JokeData from "../Jokes/JokeData";

const MemeGen = () => {
  const jokeElement = JokeData.map((joke) => {
    return (
      <Jokes key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    );
  });
  return (
    <div className="w-3/4 m-12 shadow-xl ">
      <MemeNavBar />
      {/* <StatePractice /> */}
      {jokeElement}
      {/* <Buscard /> */}
      <MemeInput />
    </div>
  );
};

export default MemeGen;
