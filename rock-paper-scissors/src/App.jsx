import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>ROCK PAPER SCISSORS</h1>
      </div>

      <div>
      <h2>Player: 0</h2>
      </div>

      <div>
      <h2>Computer: 0 </h2>
      </div>

      <div>
      <button>Rock {count} </button>
      <button>Paper {count} </button>
      <button>Scissors {count} </button>
      </div>
    </>
  )
}

export default App
