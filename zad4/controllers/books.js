const express = require('express');
const router = express.Router();

const books = [ { id: 1, title: 'Harry Potter and the Chamber of Secrets', author: 'Joanne K Rowling' },
                { id: 2, title: 'The Chronicles Of Narnia', author: 'Clive S Lewis' },
                { id: 3, title: 'Sample Book 3', author: 'Sample Author 3' }
              ];

router.get('/list', (req, res) => {
    res.render('books', { books: books });
});

router.get('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);
    if (book) {
        res.render('book', { book: book });
    } else {
        res.status(404).send("Book not found");
    }
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