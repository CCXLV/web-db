const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'psw',
    database: 'db'
});

connection.connect();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/register', (req, res) => {
    const name = req.body.name;
    const sport = req.body.sport;

    const query = `INSERT INTO registrants (name, sport) VALUES (?, ?)`;
    connection.query(query, [name, sport], (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: 'An error occurred while saving the data.' });
        } else {
            res.status(200).json({ message: 'Data saved successfully!' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});