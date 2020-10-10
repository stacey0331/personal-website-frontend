const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const formRouter = require('./routes/form-router.js');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Check MongoDB connection
db.once('open', function() {
    console.log('Connected to MongoDB');
})
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use('/api', formRouter);

// Set static folder
app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.listen(port, () => console.log(`Server running on port ${port}`));

