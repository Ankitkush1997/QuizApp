import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getQuestions } from "./QuestionList";
import { Button } from "react-bootstrap";
import Cards from "./Components/Cards";

function App() {
  const [players, setPlayers] = useState([
    { name: "James", points: 0 },
    { name: "Julia", points: 0 },
    { name: "Martha", points: 0 },
    { name: "Steve", points: 0 },
  ]);
  const [questions, setQuestions] = useState(getQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [user, setUser] = useState("");
  const [winner, setWinner] = useState([]);

  const handleAnswer = (selectedValue, answer) => {
    if (questions.length != currentQuestion + 1) {
      setUser();
      if (selectedValue == answer) {
        alert("Correct Answer. You get 3 points");
        setPlayers((prev) =>
          prev.map((data) => {
            if (user == data.name) {
              return {
                ...data,
                points: data.points + 3,
              };
            } else {
              return data;
            }
          })
        );
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setUser();
        alert("Wrong Answer. You lose 1 point");
        setPlayers((prev) =>
          prev.map((data) => {
            if (user == data.name) {
              return {
                ...data,
                points: data.points - 1,
              };
            } else {
              return data;
            }
          })
        );
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      setGameOver(true);
      players.map((e) => {
        setWinner(res);
      });
    }
    console.log(winner);
  };

  // console.log(Math.max(...players.map((e) => e.points)));

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1>Welcome to the Quiz Contest</h1>
        <h2>Participants</h2>
      </div>

      <Cards setUser={setUser} user={user} players={players} />

      {gameOver ? (
        <h1 style={{ textAlign: "center" }}>Game Over {`${players}`} </h1>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Question Number: {currentQuestion}</h1>
          <h2>{questions[currentQuestion].text}</h2>
          <p style={{ display: "flex" }}>
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() =>
                  handleAnswer(index + 1, questions[currentQuestion].answer)
                }
                style={{ margin: "1rem" }}
              >
                {option}
              </Button>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
