import './../style.css'

export default function RageBar({ progress }) {
  return (
    <div className="rage-container">
      <div
        className="rage-bar"
        style={{
          height: `${progress}%`,
          background: `linear-gradient(to top, green 0%, yellow 50%, red 100%)`
        }}
      />
    </div>
  );
}