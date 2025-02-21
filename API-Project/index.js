const express = require('express');
const app = express();
const pool = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/books', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM series');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


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

app.listen(port, () => {
  console.log(`Server started on 3000`);
});




// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const pool = require('./db')
// const port = 3000;


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//         extended: true,
//     })
// )

// app.get('/books', (req, res) => {
//     res.json({ info: 'Node.js, Express, and Postgres API'})
// })

// // app.get('/BOOKS', async (req, res) => {
// //     try {
// //         const result = await db.query('SELECT * FROM series');
// //         res.json(result.rows);
// //     } catch (err) {
// //         console.error(err);
// //         res.status(500).send('Internal Server Error');
// //     }
// // });

// add/create a new book
// const createBook = (req, res) => {
//     const { ibsn, title, author, format } = req.body
  
//     pool.query('INSERT INTO series (ibsn, title, author, format) VALUES ($1, $2, $3, $4) RETURNING *', [ibsn, title, author, format], (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(201).send(`Book added with ID: ${results.rows[0].id}`) //may be ${results.insertId}
//     })
//   }


// // Read/display all books in table
// const getBooks = (req, res) => {
//     pool.query('SELECT * FROM series ORDER BY id ASC', (error, results) => {
//         if (error) {
//             throw error
//         }
//         res.status(200).json(results.rows)
//     })
// }

// // grab books by id #
// const getBookById = (req, res) => {
//     const id = parseInt(req.params.id)
  
//     pool.query('SELECT * FROM series WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(200).json(results.rows)
//     })
//   }

// // 

// // update a book
// const updateBook = (req, res) => {
//     const id = parseInt(req.params.id)
//     const { ibsn, title, author, format } = req.body
  
//     pool.query('UPDATE series SET ibsn = $1, title = $2, author = $3, format =$4 WHERE id = $3',[ibsn, title, author, format], (error, results) => {
//         if (error) {
//           throw error
//         }
//         res.status(200).send(`Book modified with ID: ${id}`)
//       }
//     )
//   }

//   const deleteBook = (req, res) => {
//     const id = parseInt(req.params.id)
  
//     pool.query('DELETE FROM series WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`Book deleted with ID: ${id}`)
//     })
//   }

// app.get('/series', getBooks)
// app.get('/series/:id', getBookById)
// app.post('/series', createBook)
// app.put('/series/:id', updateBook)
// app.delete('/series/:id', deleteBook)


// // app.post('/BOOKS', db.createBook)


// app.listen(port, () => {
//   console.log(`Server started on 3000`);
// });
// const BOOKS = [{
    //     "isbn": "0553120441",
    //     "title": "Harry Potter and the Sorcerer's Stone",
    //     "author": "J.K. Rowling",
    //     "format": "Paperback"
    // },
    // {
    //     "isbn": "0679889175",
    //     "title": "Harry Potter and the Chamber of Secrets",
    //     "author": "J.K. Rowling",
    //     "format": "Paperback"
    // },
    // {
    //     "isbn": "9780857660282",
    //     "title": "Harry Potter and the Prisoner of Azkaban",
    //     "author": "J.K. Rowling",
    //     "format": "Paperback"
    // }]