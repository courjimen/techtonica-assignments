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
             {action  &&  <ActionIcon action={action} size={60} />}
          </div>
      </div>
  )
}

function ActionButton ({action="rock"}) {
  return (
    <button className='roundB'><ActionIcon action={action} size={20}/></button>
  )
}
function App() {
  const [playerAction, setPlayerAction] = useState("")
  const handlePlay = (playSelected) => {
    setPlayerAction(playSelected)
  }

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
            action= {playerAction}/>

          <Player
            name="Com"
            score={1} 
            action="paper"/>
        </div>

       

        <div>
          <ActionButton action="rock" handlePlay={handlePlay}/>
          <ActionButton action="paper" handlePlay={handlePlay} />
          <ActionButton action="scissors" handlePlay={handlePlay}/>
        </div>
        <h2> Player 1 Wins</h2>
      </div>



    </>
  )
}

export default App
