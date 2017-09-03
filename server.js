const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081;

app.use('/', express.static(path.join(__dirname, './public/index.html')));
app.use('/assets', express.static(path.join(__dirname, './assets')));

const indexPath = path.join(__dirname, './public/index.html');

app.get('/', (_, res) => {
    res.sendFile(indexPath);
});


app.listen(PORT, () => {
    console.log('Front app running on', PORT);
});
