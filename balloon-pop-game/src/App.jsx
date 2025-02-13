import { useState, useEffect } from 'react'
import Balloon from './components/Balloon'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [pop, setPops] = useState(0);
  const [display, setDisplay] = useState(0);

  
  const x = () => {
    setPops(pop + 1);
    console.log("pops: ", pop)
    return pop;
  }

  const balloons =
    [{ id: 1, message: "popped!" },
    { id: 2, message: "popped!" },
    { id: 3, message: "popped!" }];

  
  return (
    <>
     {balloons.map((balloon) => <Balloon
                                  onClick={x}
                                  display={display}
                                  key={balloon.id}
                                  id={balloon.id}
                                  message={balloon.message}/>)}
      <Counter label="Pops: " count={pop}/>
      </>
  )
} 

export default App
