import { useState } from 'react'
import './App.css'
import { FaHandScissors, FaHandPaper, FaHandRock } from 'react-icons/fa'

const actions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculateWinner(action1, action2) {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1] === action2) {
    return -1;
  }

//This accounts for bugs in the code.
  return null;
}

function ActionIcon({ action, ...props }) {
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

function Player({ name = "Player", score = 0, action = "rock" }) {
  return (
    <div className='player'>
      <h3 className='score'>{name} : {score}</h3>
      <div className='action'>
        {action && <ActionIcon action={action} size={60} />}
      </div>
    </div>
  )
}

function ActionButton({ action = "rock", handlePlay }) {
  return (
    <button className='roundB' onClick={() => handlePlay(action)}>
      <ActionIcon action={action} size={20} />
    </button>
  )
}
function App() {
  const [playerAction, setPlayerAction] = useState("")
  const [comAction, setComAction] = useState("")

  const [playerScore, setPlayerScore] = useState(0);
  const [comScore, setComScore] = useState(0);

  const handlePlay = (playSelected) => {
    setPlayerAction(playSelected)
    const newComAction = randomAction();

    setPlayerAction(playSelected);
    setComAction(newComAction);
    const winner = calculateWinner(playSelected, newComAction);
    if (winner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (winner === 1) {
      setComScore(comScore + 1);
    }
  };

  return (
    <>
      <div className='center'>

        <div>
          <h1>ROCK PAPER SCISSORS</h1>
        </div>

        <div className='container'>

          <Player
            name="Player 1"
            score={playerScore}
            action={playerAction} />

          <Player
            name="Com"
            score={comScore}
            action={comAction} />
        </div>



        <div>
          <ActionButton action="rock" handlePlay={handlePlay} />
          <ActionButton action="paper" handlePlay={handlePlay} />
          <ActionButton action="scissors" handlePlay={handlePlay} />
        </div>
        <h2> Player 1 Wins</h2>
      </div>



    </>
  )
}

export default App
