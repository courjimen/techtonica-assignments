import { useState } from 'react'
import './App.css'
import Player from './components/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='center'>

        <div>
          <h1>ROCK PAPER SCISSORS</h1>
        </div>

        <div className='container'>
          <div className='player'><h2>Player: 0</h2></div>
          <div className='player'><h2>Com: 0 </h2></div>
        </div>

        <div>
          <button className='button'>Rock {count} </button>
          <button>Paper {count} </button>
          <button>Scissors {count} </button>
        </div>
      </div>

      <Player 
        name = "Player 1"
        score = {0} />
    </>
  )
}

export default App
