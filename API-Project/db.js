
const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'tpl1122_12',
//     password: '',
//     host: '/tmp',
//     database: "books",
//     port: 5432,
// });

const pool = new Pool({
    user: 'guest',
    password: 'guest',
    host: '/tmp',
    database: "books",
    port: 5432,
});


module.exports = pool;