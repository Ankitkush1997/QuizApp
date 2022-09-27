import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CardItem = ({ player, user, setUser }) => {
  const handleBuzzer = (value) => {
    setUser();
    setUser(player.name);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${player.name == user ? "green" : "#FFBD00"}`,
        padding: "0.2rem 4rem",
      }}
    >
      <p style={{ fontWeight: "bold" }}>Name :{player.name} </p>
      <p style={{ fontWeight: "bold" }}>Score:{player.points}</p>
      <Button
        onClick={() => handleBuzzer(player.name)}
        style={{
          backgroundColor: "#EDECED",
          color: "black",
          border: "none",
          fontWeight: "bold",
        }}
      >
        BUZZER
      </Button>
    </div>
  );
};

export default CardItem;
