import express from 'express';
import cors from 'cors';
import pool from  './db.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//fetch leaderboard
app.get('/players', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM leaderboard')
        res.json(result.rows)
    } catch (err) {
        console.error('Error displaying top scores:', err)
        res.sendStatus(500)
    }
})

//create new player
app.post('/players', async (req, res) => {

    const { player_name, player_score }  = req.body

    try {
        const result = await pool.query('INSERT INTO score (player_name, player_score) VALUES ($1, $2) RETURNING *', [player_name, player_score])
        res.json(result.rows[0])
    } catch (err) {
        console.error('Error adding player: ', err);
        res.sendStatus(500)
}})
//update player score

//delete a player

app.listen(port, () => {
    console.log(`Server started on ${port}`);
} )