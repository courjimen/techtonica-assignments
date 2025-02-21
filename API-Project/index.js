const express = require('express');
const app = express();
const db = require('./db');
/* import pg from 'pg';
const db = new pg.Pool {}
*/
const BOOKS = [{
    "isbn": "0553120441",
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "format": "Paperback"
},
{
    "isbn": "0679889175",
    "title": "Harry Potter and the Chamber of Secrets",
    "author": "J.K. Rowling",
    "format": "Paperback"
},
{
    "isbn": "9780857660282",
    "title": "Harry Potter and the Prisoner of Azkaban",
    "author": "J.K. Rowling",
    "format": "Paperback"
}]

app.get('/BOOKS', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM series');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
