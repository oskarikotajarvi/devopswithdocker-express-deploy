// Nothing major in this app
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.json({ message: 'Hello world' });
});

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT || 8080}`);
});
