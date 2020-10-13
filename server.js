const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('client/build'));

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});