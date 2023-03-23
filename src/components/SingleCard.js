import "./SingleCard.css";

export default function SingleCard({ card, handleChoice }) {

const handleClick = () => {
    handleChoice(card)

}


  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          onClick={handleClick}
          src="http://localhost:3000/react-gh-pagesgit/img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
}