import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "http://localhost:3000/react-gh-pagesgit/img/helmet-1.png" },
  { src: "http://localhost:3000/react-gh-pagesgit/img/potion-1.png" },
  { src: "http://localhost:3000/react-gh-pagesgit/img/ring-1.png" },
  { src: "http://localhost:3000/react-gh-pagesgit/img/scroll-1.png" },
  { src: "http://localhost:3000/react-gh-pagesgit/img/shield-1.png" },
  { src: "http://localhost:3000/react-gh-pagesgit/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {
        cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front"/>
              <img className="back" src="http://localhost:3000/react-gh-pagesgit/img/cover.png" alt="card back"/>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
