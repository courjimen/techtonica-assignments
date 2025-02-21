const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('./db')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
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

app.get('/BOOKS', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API'})
})
// app.get('/BOOKS', async (req, res) => {
//     try {
//         const result = await db.query('SELECT * FROM series');
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/BOOKS', db.createBook)


app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
