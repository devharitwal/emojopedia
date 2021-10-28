import "./styles.css";
import React from "react";

import Header from "./components/Header";

import Card from "./components/Card";

import EmojiData from "./data";

function dataMapper(data) {
  return <Card key={data.id} name={data.name} emoji={data.emoji} />;
}

export default function App() {
  return (
    <div>
      <Header />
      <div className="block">{EmojiData.map(dataMapper)}</div>
    </div>
  );
}
