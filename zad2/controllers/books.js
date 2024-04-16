const express = require('express');
const router = express.Router();

const books = [{ title: 'Sample Book', author: 'Sample Author' }];

router.get('/list', (req, res) => {
    res.render('books', { books: books });
});

module.exports = router;