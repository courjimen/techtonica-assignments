const { Pool } = require('pg');

const pool = new Pool({
    user: 'courey',
    password: 'orange',
    host: 'localhost',
    port: 5432,
    database: "books"
});

const createBook = (request, response) => {
    const { ibsn, title, author, format } = request.body
  
    pool.query('INSERT INTO books (ibsn, title, author, format) VALUES ($1, $2, $3, $4) RETURNING *', [ibsn, title, author, format], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

module.exports = {
    createBook
}