import './App.css'
import { useState } from 'react'
import { FaHandScissors, FaHandPaper, FaHandRock } from 'react-icons/fa'
import PlayerForm from './components/PlayerForm';
import Scoreboard from './components/Scoreboard';

const actions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

//ALLOWS COMPUTER TO RANDOMLY SELECT A PLAY
function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

//CHECKS ARRAY TO SEE WHICH ACTION WON
function calculateWinner(action1, action2) {
  if (action1 === action2) return 0;
  else if (actions[action1] === action2) return -1;
  return 1;
}

//RENDERS ICON BASED ON PLAYER SELECTION
function ActionIcon({ action, ...props }) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors
  };
  const Icon = icons[action]
  return <Icon {...props} />;
}

//PLAYER COMPONENT
function Player({ name = "Player", score = 0, action = "rock" }) {
  return (
    <div className='player'>
      <h3 className='score'>{name} : {score}</h3>
      <div className='action'>{action && <ActionIcon action={action} size={60} />}</div>
    </div>
  )
}

//BUTTON TO SELECT ACTION
function ActionButton({ action = "rock", handlePlay }) {
  return (
    <button className='roundB' onClick={() => handlePlay(action)}>
      <ActionIcon action={action} size={20} />
    </button>
  )
}

//DISPLAYS WINNER, LOSER, OR TIE
function ShowWinner({ winner = 0 }) {
  const text = {
    "-1": "Winner 🎉",
    0: "Tied!",
    1: "Sorry, you lost 😢"
  };
  return <h2>{text[winner]}</h2>
}

//PARENT FUNCTION 
function App() {
  //TRACKS SELECTION OF PLAYER/COM
  const [playerName, setPlayerName] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  const [playerAction, setPlayerAction] = useState('')
  const [comAction, setComAction] = useState('')
  const [playerScore, setPlayerScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  const [winner, setWinner] = useState(0);
  const [round, setRound] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const handlePlayerSubmit = (name) => {
    setPlayerName(name)
    setGameStarted(true)
  }

  //BUTTON FUNCTIONALILTY
  const handlePlay = async (playSelected) => {
    if (gameOver) return;

    setPlayerAction(playSelected)
    const newComAction = randomAction();
    setComAction(newComAction);

    //TRACKS SCORE
    const newWinner = calculateWinner(playSelected, newComAction);
    setWinner(newWinner)

    if (newWinner === -1) setPlayerScore(playerScore + 1);
    else if (newWinner === 1) setComScore(comScore + 1);

    setRound(round +1)

    //setting rounds and game over condition
    if (round + 1 === 3) {
      setGameOver(true)
      try {
        await fetch('http://localhost:3000/players', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ player_name: playerName, player_score: playerScore }),
        })
      } catch (err) {
        console.error('Error retrieving scores:', err)
      }
    }
  };

  if (!gameStarted) {
    return <PlayerForm newPlayer={handlePlayerSubmit} />
  }

  if (gameOver) {
    return <Scoreboard playerName={playerName} playerScore={playerScore} />
  }

  return (
    <div className='center'>
      <h1>ROCK PAPER SCISSORS</h1>
      <div className='container'>
        
        <Player
          name={playerName}
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
      <ShowWinner winner={winner} />
    </div>
  )
}

export default App
