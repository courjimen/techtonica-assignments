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

const express = require('express');
const router = express.Router();

router.get('/BOOKS', (req, res) => {
    res.json(data);
});

module.exports = BOOKS;