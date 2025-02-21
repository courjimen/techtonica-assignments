const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'tpl1122_12',
    host: 'local socket',
    database: "books",
    port: 5432
});

// Read/display all books in table
const getBooks = (req, res) => {
    pool.query('SELECT * FROM series ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

// grab books by id #
const getBookById = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('SELECT * FROM series WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

// add/create a new book
const createBook = (req, res) => {
    const { ibsn, title, author, format } = req.body
  
    pool.query('INSERT INTO series (ibsn, title, author, format) VALUES ($1, $2, $3, $4) RETURNING *', [ibsn, title, author, format], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Book added with ID: ${results.rows[0].id}`)
    })
  }

// update a book
const updateBook = (req, res) => {
    const id = parseInt(req.params.id)
    const { ibsn, title, author, format } = req.body
  
    pool.query('UPDATE series SET ibsn = $1, title = $2, author = $3, format =$4 WHERE id = $3',[ibsn, title, author, format], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Book modified with ID: ${id}`)
      }
    )
  }

  const deleteBook = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('DELETE FROM series WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Book deleted with ID: ${id}`)
    })
  }

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
}