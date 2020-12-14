const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.resolve(__dirname, 'build')));

// app.use('/build', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js')))

// app.use('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../public/index.html')));
app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = app;
