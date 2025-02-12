import { useState, useEffect } from 'react'
import Balloon from './components/Balloon'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [pop, setPops] = useState(0)

  const resetGame = () => {
    setPops(-1);
  }

  useEffect(() => {
    const numOfPops = () => {
      setPops((prevPop) => prevPop + 1);
    };

    document.addEventListener('click', numOfPops);

    return () => {
      document.removeEventListener('click', numOfPops);
    };
  }, []);
  
  return (
    <>
      <button onClick={resetGame}>Reset Pops!</button>
      <Balloon />
      <Counter label={"Pops"} count={pop}/>
    </>
  )
}

export default App
