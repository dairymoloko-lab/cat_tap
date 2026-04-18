import { useState, useEffect } from "react";
import Cat from "./Cat";
import Score from "./Score";
import RageBar from "./RageBar";
import StatsModal from "./StatsModal";
import useLocalStorage from "../hooks/useLocalStorage";
import Shop from "./Shop";
import Inventory from "./Inventory";

export default function Game({ name }) {
  const [score, setScore] = useLocalStorage("score", 0);
  const [totalClicks, setTotalClicks] = useLocalStorage("clicks", 0);
  const [rage, setRage] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const [inventory, setInventory] = useLocalStorage("inventory", []);
const [multiplier, setMultiplier] = useLocalStorage("multiplier", 1);
const [autoClick, setAutoClick] = useLocalStorage("autoClick", 0);

const handleUseItem = (itemId) => {
  // 🪵 когтеточка (id: 4)
  if (itemId === 4) {
    setRage(prev => Math.max(prev - prev * 0.1, 0));
  }

  // 🤖 робо-кормушка (id: 7)
  if (itemId === 7) {
    setMultiplier(prev => prev * 2);
  }
};


const handleClick = () => {
  if (cooldown) return;

  const gain = 1 * multiplier;

  setScore(score + gain);
  setTotalClicks(totalClicks + 1);

  const newRage = rage + 1;
  setRage(newRage);

  if (newRage >= 100) {
    setCooldown(true);
    setRage(0);

    let progress = 0;

    const interval = setInterval(() => {
      progress += 2;
      setRage(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setCooldown(false);
        setRage(0);
      }
    }, 500);
  }
};

useEffect(() => {
  const interval = setInterval(() => {
    setRage(prev => {
      if (prev <= 0) return 0;
      return prev - .05; // скорость уменьшения
    });
  }, 300); // каждые 300мс

  return () => clearInterval(interval);
}, []);


  return (
    <div className="game">
      <h1>🐱 Cat Clicker</h1>

      <section className="app-main">
      <div>
        
<Inventory onUseItem={handleUseItem}    inventory={inventory} setInventory={setInventory}/>

              <Shop
  score={score}
  setScore={setScore}
  multiplier={multiplier}
  setMultiplier={setMultiplier}
  autoClick={autoClick}
   inventory={inventory}
   setInventory={setInventory}
  setAutoClick={setAutoClick}
/>
      </div>

      <div>
      <Score score={score} />
  <br />
      <Cat onClick={handleClick} disabled={cooldown} />
    <br />

      <button onClick={() => setShowStats(true)}>Статистика</button>
      </div>

      <div>

      <RageBar progress={rage} />
      </div>
      </section>






      {showStats && (
        <StatsModal
         stats={{ name, score, totalClicks, multiplier, autoClick }}
          onClose={() => setShowStats(false)}
          
        />
      )}
    </div>
  );
}