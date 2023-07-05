import "./Jokes.css";
import React from "react";

export default function Jokes(props) {
  const [isShown, setIsShown] = React.useState(true);

  const [message, setMessage] = React.useState(["a", "b", "c"]);
  function Showing() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div className="grid gap-4 p-2 font-serif">
      {props.setup && <h3 className="font-bold">Setup: {props.setup}</h3>}
      {/* If setup exists then print it out else don't print anything */}
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button onClick={Showing} className="bg-fuchsia-800 text-white p-2">
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
      {message.length > 0 ? (
        <p>
          You have {message.length} Unread{" "}
          {message.length === 1 ? "message" : "messages"}
        </p>
      ) : (
        <p>You are all caught up</p>
      )}
    </div>
  );
}
