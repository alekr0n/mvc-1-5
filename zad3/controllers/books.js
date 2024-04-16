const express = require('express');
const router = express.Router();

const books = [{ id: 1, title: 'Sample Book', author: 'Sample Author' }];

router.get('/list', (req, res) => {
    res.render('books', { books: books });
});

router.post('/add', (req, res) => {
    const { title, author } = req.body;
    const id = books.length + 1; // Генерация ID
    const newBook = { id, title, author };
    books.push(newBook);
    res.redirect('/book/list');
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.redirect('/book/list');
});

module.exports = router;