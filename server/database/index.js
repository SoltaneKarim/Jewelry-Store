const mysql = require('mysql2');
const mysqlConfig = require('./config.js')

const connection = mysql.createConnection(mysqlConfig)

connection.connect((err)=> {
    if(err) console.log('error connecting',err)
    else console.log("Yaaay Database connected!!");
})

const getAllBracelets = (req,res) => {
    const query = 'SELECT * FROM bracelet'
    connection.query(query, (err,results) => {
        if (err) {
            console.log('error getting bracelets')
            return res.status(500).json({error : 'error getting bracelets'})
    }
    res.json(results)
    })
}

const addBracelet = (req,res) => {
    const query = 'INSERT INTO bracelet (title,description,image) VALUES (?,?,?)'
    const { title, description, image } = req.body
    connection.query(query,[title, description, image], (err,results) => {
        if (err) {
            console.log('error adding bracelet')
            return res.status(502).json({error : 'error adding bracelets'})
    }
    res.json(results)
    })
}

const updateBracelet = (req,res) => {
    const query = 'UPDATE bracelet SET title=?, description=?, image=? WHERE id=?'
    const braceletId = req.params.id
    const { title, description, image } = req.body
    connection.query(query,[title, description, image, braceletId], (err,results) => {
        if (err) {
            console.log('error getting bracelets')
            return res.status(500).json({error : 'error getting bracelets'})
    }
    res.json({results})
    })
}

const deleteBracelet = (req,res) => {
    const query = 'DELETE FROM bracelet WHERE id=?'
    const braceletId = req.params.id
    connection.query(query,[braceletId], (err,results) => {
        if (err) {
            console.log('error getting bracelets')
            return res.status(500).json({error : 'error getting bracelets'})
    }
    res.json({results})
    })
}

module.exports = {
    getAllBracelets,
    addBracelet,
    updateBracelet,
    deleteBracelet
}