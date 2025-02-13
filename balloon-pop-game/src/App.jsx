import { useState, useEffect } from 'react'
import Balloon from './components/Balloon'
import Counter from './components/Counter'
import Prizes from './components/Prizes'
import './App.css'

function App() {
  const [pop, setPops] = useState(0);
  const balloons =
    [{ id: 1, message: "winner" },
    { id: 2, message: "loser" },
    { id: 3, message: "loser" }];


  return (
     balloons.map((balloon) => <Balloon
                                  key={balloon.id}
                                  id={balloon.id}
                                  message={balloon.message}/>)
  )
} 

export default App
