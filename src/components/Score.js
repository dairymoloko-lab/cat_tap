import coin from "../assets/catcoin.svg";

export default function Score({ score }) {
  return (
    <div className="score">
      <img src={coin} alt="coin" />
      <span>{score}</span>
    </div>
  );
}