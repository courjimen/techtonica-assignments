const express = require('express');
const app = express();
const pool = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

//displays all books
app.get('/books', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM series');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

//add/create a new book entry
app.post('/books', async (req, res) => {
    const {ibsn, title, author, format} = req.body;
  
    try{
      const createResult = await pool.query('INSERT INTO series (ibsn, title, author, format) VALUES ($1, $2, $3, $4) RETURNING *', [ibsn, title, author, format]);
      res.json(createResult.rows);
    } catch(err) {
      console.error(err);
      res.send("Unable to use POST to add a new book");
    }
  });

  // update a book
  app.put('/books/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const {ibsn, title, author, format} = req.body;
  
    try {
      const updateBook = await pool.query('UPDATE series SET ibsn = $1, title = $2, author = $3, format = $4 WHERE id = $5 RETURNING *', [ibsn, title, author, format, id]);
      res.json(updateBook.rows[0]);

    } catch(err) {
      console.log(err);
      res.send("Unable to use PUT to update");
    }
  });

//delete book
app.delete('/books/:id', async (req, res) => {
    const id = parseInt(req.params.id);
  
    try {
      const deleteBook = await pool.query('DELETE FROM series WHERE id = $1', [id]);
      res.json(deleteBook.rows);

    } catch(err) {
      console.log(err);
      res.send("Unable to use PUT to update");
    }
  });

app.listen(port, () => {
  console.log(`Server started on 3000`);
});




