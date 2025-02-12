import { useState, useEffect } from 'react'
import Balloon from './components/Balloon'
import Counter from './components/Counter'
import Prizes from './components/Prizes'
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

  let balloonList = [
    {
      balloonNum: "Balloon 1",
      prize: "./src/images/HannahHedgeHog.jpeg",
      status: "Winner!"
    },
    {
      balloonNum: "Balloon 2",
      prize: "",
      status: "Sorry :("
    },
    {
      balloonNum: "Balloon 3",
      prize: "",
      status: "Sorry :("
    },
    {
      balloonNum: "Balloon 4",
      prize: './src/images/Teddy-Tiger.jpeg',
      status: "Winner!"
    }
  ];

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
