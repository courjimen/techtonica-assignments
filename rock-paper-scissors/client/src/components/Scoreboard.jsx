import React, { useState, useEffect } from 'react'

function Scoreboard({ playerName, playerScore }) {
    const [scoreboard, setScoreBoard] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [searchName, setSearchName] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        async function fetchScoreboard() {
            setError(null)
            setLoading(true)
            try {
                const res = await fetch('http://localhost:3000/players')
                if (res.ok) {
                    const data = await res.json()
                    setScoreBoard(data)
                } else {
                    setError('Failed to display scores')
                }
            } catch (err) {
                setError('Error displaying scoreboard: ', err)
            } finally {
                setLoading(false)
            }
        }
        fetchScoreboard()
    }, [])

    const handleSearch = async () => {
        setError(null)
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:3000/players/search/${searchName}`)
            if (res.ok) {
                const data = await res.json()
                setSearchResults(data)
            } else {
                setError('Failed to search players')
            }
        } catch (err) {
            setError('Error searching players: ', err)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div>Loading scoreboard...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='scoreboard'>
            <h2>Game Over!</h2>
            <p>{playerName}'s Final Score: {playerScore}</p>

            <div>

        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search Player"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

            <h2>Scoreboard</h2>
            <ul>
            {searchResults.length > 0 ? (searchResults.map((item) => (
                    <li key={item.player_id}>
                    {item.player_name}: {item.player_score}
                    </li>
                )) 
            ) : (scoreboard.map((item) => (
                    <li key={item.rank} data-rank={item.rank}>
                       <span className='player-name'>{item.player_name}: {item.player_score}</span>
                    </li>
                ))
            )}
            </ul>
        </div>
    )
}
// add in color coded highlight to show their place on the board?
export default Scoreboard