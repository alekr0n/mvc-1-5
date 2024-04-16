const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

app.use('/', homeRouter);
app.use('/book', booksRouter);
app.use('/author', authorsRouter);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { message: 'In progress...' });
});

app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});