import logo from './logo.svg';
import './App.css';
import Card from "./card.js"
import emojipedia from './emojipedia';
function fillCard(emojipedia){
  return(
  <Card
  key={emojipedia.id}
  emoji={emojipedia.emoji}
  title={emojipedia.name}
  description={emojipedia.meaning}
  />
  );
}
function App() {
  return (
    <div>
    <h1 id="main-heading">Emojipedia</h1>
    <dl className="dictionary">{emojipedia.map(fillCard)}</dl>
      </div>
  );
}

export default App;
