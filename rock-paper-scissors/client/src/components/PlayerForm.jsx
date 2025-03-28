import React, { use, useState } from 'react'

function PlayerForm({ newPlayer }) {
    const [playerName, setPlayerName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        newPlayer(playerName)
    }

  return (
    <div className='player-form'>
        <h2>Enter your name</h2>
        <form onSubmit={handleSubmit}> 
            <input 
            type="text"
            value={playerName}
            placeholder='Your name'
            onChange={(e) => setPlayerName(e.target.value)}
            />
            <button type='submit'>Start Game</button>
        </form>

        
    </div>
  )
}

export default PlayerForm