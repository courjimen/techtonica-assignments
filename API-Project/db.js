const { Pool } = require('pg');

const pool = new Pool({
    user: 'courey',
    password: 'orange',
    host: 'localhost',
    port: 5432,
    database: "books"
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};