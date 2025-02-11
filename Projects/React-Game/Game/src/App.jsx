import { useState } from 'react'
import Coin from "./Coin.jsx";
import Counter from "./Counter.jsx";
import './App.css'

function App() {
  const [coinSide, setCoinSide] = useState("tails");
  const [tailsCount, setTailsCount] = useState(0);
  const [headsCount, setHeadsCount] = useState(0);

  const getHeadsOrTails = () => {
    const headsOrTails =  Math.random() < 0.5 ? "heads" : "tails";
    setCoinSide(headsOrTails);
    
    if(headsOrTails === "heads"){
      setHeadsCount(headsCount+1);
    } else {
      setTailsCount(tailsCount+1);
    }
    return headsOrTails;
  }
  
  return (
    <div>
      <h1>Coin Flip Game</h1>
      <Coin headsOrTails={coinSide}/>
      <button onClick={getHeadsOrTails}>Flip</button>
      <Counter label={"Heads Counter"} count={headsCount}/>
      <Counter label={"Tails Counter"} count={tailsCount}/>
    </div>
  )
}

export default App
