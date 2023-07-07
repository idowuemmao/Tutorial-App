import React, { useState, useEffect } from "react";

export default function GetData() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(function () {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
    // .then((data) => console.log(data));
  }, [count]);

  return (
    <div className="inline-grid place-items-center gap-4">
      <h1>The Count is {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-red-500 p-1 shadow-lg border border-black"
      >
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
