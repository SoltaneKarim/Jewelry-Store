const express = require('express');
const app = express();
const port = 5000
const bodyParser = require('body-parser')
const db = require('./database/index.js');

app.use(express())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/bracelets', db.getAllBracelets)
app.post('/api/bracelets', db.addBracelet)
app.put('/api/bracelets/:id', db.updateBracelet)
app.delete('/api/bracelets/:id', db.deleteBracelet)

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})