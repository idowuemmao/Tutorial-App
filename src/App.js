import React from "react";
// import NavBar from "./ReactSite/Navbar";
// import Page from "./ReactSite/Page";
import Main from "./Airbnb/Main";
import Navbar from "./Airbnb/Navbar";
import Card from "./Airbnb/Card";
import CardData from "./Airbnb/CardData";

function App() {
  // console.log(CardData);
  const cardElement = CardData.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        description={card.description}
        price={card.price}
        coverImg={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        openSpot={card.openSpots}
      />
    );
  });
  return (
    // <div className="m-8 border-2 w-96 border-black">
    //   <NavBar />
    //   <Page />
    // </div>)

    <div className="m-8 border-2 w-9/12 shadow-xl ">
      <Navbar />
      <Main />
      <div className="flex overflow-auto">{cardElement}</div>
    </div>
  );
}

export default App;
