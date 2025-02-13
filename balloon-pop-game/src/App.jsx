import { useState, useEffect } from 'react'
import Balloon from './components/Balloon'
import Counter from './components/Counter'
import Balloon2 from './components/Balloon2'
import Balloon3 from './components/Balloon3'
import Balloon4 from './components/Balloon4'
import Prizes from './components/Prizes'
import './App.css'

function App() {
  const [pop, setPops] = useState(0)

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

// FUNCTION TO HIDE/REVEAL PRIZES ON CLICK ("POP" THE BALLOON)
const [balloonVisible, setBalloonVisible] = useState(false);
const handleClick = () => {
  setBalloonVisible(!balloonVisible)
}

const [balloon2Visible, setBalloon2Visible] = useState(false);
const handleClick2 = () => {
  setBalloon2Visible(!balloon2Visible)
}

const [balloon3Visible, setBalloon3Visible] = useState(false);
const handleClick3 = () => {
  setBalloon3Visible(!balloon3Visible)
}

const [balloon4Visible, setBalloon4Visible] = useState(false);
const handleClick4 = () => {
  setBalloon4Visible(!balloon4Visible)
}

// MY CHILDREN COMPONENTS & BUTTONS
  return (
    <>
      <div>
      <Balloon onClick={handleClick} balloon={"balloon 1"}/>
        {balloonVisible ? "Winner!" : ""}
      </div>

      <div>
      <Balloon2 onClick={handleClick2} balloon={"balloon 2"}/>
        {balloon2Visible ? "Winner!" : ""}
      </div>

      <div>
      <Balloon3 onClick={handleClick3} balloon={"balloon 3"}/>
        {balloon3Visible ? "Try Again :(" : ""}
      </div>

      <div>
      <Balloon4 onClick={handleClick4} balloon={"balloon 4"}/>
        {balloon4Visible ? "Try again :(" : ""}
      </div>

      <button onClick={resetGame}>Reset Pops!</button>
      <Counter label={"Pops"} count={pop} />
      {/* <Prizes /> */}
      
    </>
  );
}

export default App

// // MY ARRAY OF BALLOONS
// let balloonList = [
//   {
//     balloonNum: "Balloon 1",
//     status: "Winner!"
//   },
//   {
//     balloonNum: "Balloon 2",
//     status: "Sorry :("
//   },
//   {
//     balloonNum: "Balloon 3",
//     status: "Sorry :("
//   },
//   {
//     balloonNum: "Balloon 4",
//     status: "Winner!"
//   }
// ];
