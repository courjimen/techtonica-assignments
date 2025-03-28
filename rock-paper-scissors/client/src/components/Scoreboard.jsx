import React, { useState, useEffect } from 'react'

function Scoreboard({ playerName, playerScore }) {
    const [scoreboard, setScoreBoard] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

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

            <h2>Scoreboard</h2>
            <ul>
                {scoreboard.map((item) => (
                    <li key={item.rank}>
                        {item.player_name}: {item.player_score} (Rank: {item.rank})
                    </li>
                ))}
            </ul>
        </div>
    )
}
// add in color coded highlight to show their place on the board?
export default Scoreboard