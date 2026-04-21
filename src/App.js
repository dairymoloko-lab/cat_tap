import './App.css';
import useLocalStorage from "./hooks/useLocalStorage";
import Game from "./components/Game";
import NamePrompt from "./components/NamePrompt";
import "./style.css";

function App() {
  const [name, setName] = useLocalStorage("username", null);

  if (!name) {
    return <NamePrompt onSave={setName} />;
  }

  return <Game name={name} />;
}

export default App;
