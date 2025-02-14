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

          <Player
            name="Player 1"
            score={0} />

          <Player
            name="Com"
            score={1} />
        </div>

        {/* <div className='action'>
        <ActionIcon action={action} />
        </div> */}

        <div>
          <button className='roundB'>FaHandRock {count} </button>
          <button className='roundB'>FaHandPaper {count} </button>
          <button className='roundB'>FaHandScissors {count} </button>
        </div>
      </div>



    </>
  )
}

export default App
