import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//fetch leaderboard
app.get('/players', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM leaderboard')
        res.json(result.rows)
    } catch (err) {
        console.error('Error displaying top scores:', err)
        res.sendStatus(500)
    }
})

//create new player
app.post('/players', async (req, res) => {

    const { player_name, player_score } = req.body

    try {
        const result = await pool.query('INSERT INTO score (player_name, player_score) VALUES ($1, $2) RETURNING *', [player_name, player_score])
        res.json(result.rows[0])
    } catch (err) {
        console.error('Error adding player: ', err);
        res.sendStatus(500)
    }
})

//update player score
const updatePlayerScore = async (playerName, newScore) => {
    try {
        const result = await pool.query('UPDATE score SET player_score = $1 WHERE player_name = $2 RETURNING *', [newScore, playerName])

        if (result.rows.length > 0) {
            return result.rows[0];
        } else {
            return null;
        }
    } catch (err) {
        console.error('Error updating score:', err)
        throw err
    }
}

app.patch('/players/:playerName/score', async (req, res) => {
    const playerName = req.params.playerName;
    const { player_score } = req.body;

    try {
        const updatedPlayer = await updatePlayerScore(playerName, player_score);

        if (updatedPlayer) {
            res.json(updatedPlayer);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        res.sendStatus(500);
    }
});
//delete a player

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})