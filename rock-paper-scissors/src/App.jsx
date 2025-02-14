import { useState } from 'react'
import './App.css'
import {FaHandScissors, FaHandPaper, FaHandRock} from 'react-icons/fa' 

function ActionIcon({action, ...props}) {
  const icons = {
      rock: FaHandRock,
      paper: FaHandPaper,
      scissors: FaHandScissors
  };
  const Icon = icons[action]
return (
 <Icon {...props} />
);

}

function Player({ name = "Player", score = 0, action = "rock"}) {
  return (
      <div className='player'>
          <h3 className='score'>{name} : {score}</h3>
          <div className='action'>
              <ActionIcon action={action} size={60} />
          </div>
      </div>
  )
}

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
            score={0} 
            action= "rock"/>

          <Player
            name="Com"
            score={1} 
            action= "rock"/>
        </div>

       

        <div>
          <button className='roundB'><FaHandPaper size={20} /></button>
          <button className='roundB'><FaHandRock size={20}/></button>
          <button className='roundB'><FaHandScissors size={20}/></button>
        </div>
      </div>



    </>
  )
}

export default App
