import React, { useState } from "react";
import CardItem from "./CardItem";

const Cards = ({ players, user, setUser, playerBuzzer }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {players.map((player, index) => (
        <CardItem
          key={index}
          playerBuzzer={playerBuzzer}
          user={user}
          player={player}
          setUser={setUser}
        />
      ))}
    </div>
  );
};

export default Cards;
