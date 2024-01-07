const express = require('express')
const { db } = require('./config/db')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

app.get("/academies", (req,res)=>{
    db.query("SELECT * FROM academies", (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

app.get("/academies/:id", (req,res)=>{
    const id = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", id, (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

app.post("/register", (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;

    const sql = `INSERT INTO user (name, surname, email, password) VALUES ("${name}", "${surname}", "${email}", "${password}")`;

    db.query(sql, function(err) {
        if (err) throw err;
        res.end();
    });

});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let results = [];

    const sql = `SELECT email, password FROM user`;

    db.query(sql, function (err,row) {
        results = row.body;
    });
    console.log(results);


    res.send({
        token: 'test123'
    });
})

app.listen(3001, () => console.log("Server started on port 3001"))