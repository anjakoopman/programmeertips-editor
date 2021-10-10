import { useState } from "react";
import "./styles.css";

const defaultTips = [
  {
    shortcut: "control shift p",
    text: "commando's tonen"
  },
  {
    shortcut: "control shift option benedenpijl",
    text: "regel kopieren"
  },
  {
    shortcut: "control s",
    text: "opslaan"
  },
  {
    shortcut: "control",
    text: "document openen / zoeken"
  }
];

export default function App() {
  const [tips, setTips] = useState(defaultTips);
  const [newTipCommand, setNewTipCommand] = useState("");
  const [newTipText, setNewTipText] = useState("");

  function createListitem(tip) {
    return (
      <li>
        <strong>{tip.shortcut}</strong> = {tip.text}
      </li>
    );
  }

  function addTip() {
    tips.push({
      text: newTipText,
      shortcut: newTipCommand
    });
    setTips(tips);
    setNewTipCommand("");
    setNewTipText("");
  }

  return (
    <div className="App">
      <h2>Programmeertips: </h2>
      <ol>{tips.map(createListitem)}</ol>
      <form>
        <input
          value={newTipCommand}
          onChange={(e) => setNewTipCommand(e.target.value)}
          placeholder="Sneltoets..."
        />
        <input
          value={newTipText}
          onChange={(e) => setNewTipText(e.target.value)}
          placeholder="Text..."
        />
        <button type="button" onClick={addTip}>
          toevoegen
        </button>
      </form>
    </div>
  );
}
