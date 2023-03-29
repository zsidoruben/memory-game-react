import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  {
    src: "http://localhost:3000/react-gh-pagesgit/img/helmet-1.png",
    matched: false,
  },
  {
    src: "http://localhost:3000/react-gh-pagesgit/img/potion-1.png",
    matched: false,
  },
  {
    src: "http://localhost:3000/react-gh-pagesgit/img/ring-1.png",
    matched: false,
  },
  {
    src: "http://localhost:3000/react-gh-pagesgit/img/scroll-1.png",
    matched: false,
  },
  {
    src: "http://localhost:3000/react-gh-pagesgit/img/shield-1.png",
    matched: false,
  },
  {
    src: "http://localhost:3000/react-gh-pagesgit/img/sword-1.png",
    matched: false,
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
      setChoiceOne(null)
      setChoiceTwo(null)
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    //comparison
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        //console.log("Match found: " + choiceOne.src + ", " + choiceTwo.src);
        resetTurn();
      } else {
        //console.log("Not a match");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);


useEffect(() => {
  shuffleCards()
}, [])



  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const handleChoice = (card) => {
    if (choiceOne) {
      if (card.id !== choiceOne.id) {
        setChoiceTwo(card);
      }
    } else {
      setChoiceOne(card);
    }
  };

  return (
    <div className="App">
      <h1>Match</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          ></SingleCard>
        ))}
      </div>
      <p>Turn: {turns}</p>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
