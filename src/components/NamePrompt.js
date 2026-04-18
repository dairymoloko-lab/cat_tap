import { useState } from "react";

export default function NamePrompt({ onSave }) {
  const [name, setName] = useState("");

  return (
    <div className="center">
      <h2>Как зовут котовода? 🐾</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={() => name && onSave(name)}>Начать</button>
    </div>
  );
}