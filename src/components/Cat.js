export default function Cat({ onClick, disabled }) {
  return (
    <div className="cat-wrapper">
    <img
      src="./cat.png"
      alt="cat"
      className={`cat-img cat ${disabled ? "disabled" : ""}`}
      onClick={!disabled ? onClick : null}
    /></div>
  );
}