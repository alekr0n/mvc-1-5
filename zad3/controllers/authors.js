const express = require('express');
const router = express.Router();

const authors = [{ name: 'Sample Author' }];

router.get('/list', (req, res) => {
    res.render('authors', { authors: authors });
});

module.exports = router;