import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonateClick, onLikesClick }) {
  const toyCardCollection = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onDonateClick={onDonateClick} onLikesClick={onLikesClick} />
  })

  return (
    <div id="toy-collection">{toyCardCollection}</div>
  );
}

export default ToyContainer;
