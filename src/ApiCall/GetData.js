import React, { useState } from "react";

export default function GetData() {
  const [starWarsData, setStarWarsData] = useState({});
  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    // .then((data) => setStarWarsData(data));
    .then((data) => console.log(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
