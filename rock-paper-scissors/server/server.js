import express from 'express';
import cors from 'cors';
import pool from  './db.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//fetch leaderboard
app.get('/scores', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM leaderboard')
        res.json(result.rows)
    } catch (err) {
        console.error('Error displaying top scores:', err)
        res.sendStatus(500)
    }
})
//create new player

//update player score

//delete a player

app.listen(port, () => {
    console.log(`Server started on ${port}`);
} )