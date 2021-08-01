const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());

app.use(express.static('build'));

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});