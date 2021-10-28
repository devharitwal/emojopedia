import React from "react";
// use props to load the data in the card
// print the name and emoji

function Card(props) {
  return (
    <div className="emoji-block">
      <h1 className>{props.name}</h1>
      <h3 className>{props.emoji} </h3>
    </div>
  );
}

export default Card;
