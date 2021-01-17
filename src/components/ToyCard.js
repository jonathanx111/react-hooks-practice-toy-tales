import React from "react";

function ToyCard({ toy: { id, name, image, likes }, onDonateClick, onLikesClick }) {
  function handleDonateClick() {
    onDonateClick(id)
  }

  function handleLikesClick() {
    onLikesClick(id, likes)
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikesClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDonateClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
