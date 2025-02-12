import { useState, useEffect } from 'react'
import Balloon from './components/Balloon'
import Counter from './components/Counter'
import Prizes from './components/Prizes'
import './App.css'

function App() {
  const [pop, setPops] = useState(0)
  const [balloon, setBalloon] = useState(false)
// USE STATE (VISIBILITY)
const handleClick = () => {
  setBalloon(!balloon)
}
// USE STATE (COUNTER)
  const resetGame = () => {
    setPops(-1);
  }
// CLICK & COUNT ANYWHERE ON THE SCREEN
  useEffect(() => {
    const numOfPops = () => {
      setPops((prevPop) => prevPop + 1);
    };

    document.addEventListener('click', numOfPops);

    return () => {
      document.removeEventListener('click', numOfPops);
    };
  }, []);
// MY ARRAY OF BALLOONS
  let balloonList = [
    {
      balloonNum: "Balloon 1",
      status: "Winner!"
    },
    {
      balloonNum: "Balloon 2",
      status: "Sorry :("
    },
    {
      balloonNum: "Balloon 3",
      status: "Sorry :("
    },
    {
      balloonNum: "Balloon 4",
      status: "Winner!"
    }
  ];

// FUNCTION TO HIDE/REVEAL PRIZES ON CLICK ("POP" THE BALLOON)

// MY CHILDREN COMPONENTS & BUTTONS
  return (
    <>
      <button onClick={resetGame}>Reset Pops!</button>
      <Counter label={"Pops"} count={pop} />
      <Prizes />
      <div>
      {balloonList.map((balloon, index) => (
      <Balloon
        key={index}
        balloon={balloon.balloonNum}
        prize={balloon.prize}
        status={balloon.status }
      />
      ))}
      </div>
    </>
  );
}

export default App
