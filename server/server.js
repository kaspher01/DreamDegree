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
    db.query("SELECT * FROM academies WHERE id = ?", id, (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

app.get("/fields", (req,res)=>{
    db.query("SELECT * FROM fields_of_study", (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

app.get("/academiesFields", (req,res)=>{
    db.query("SELECT * FROM fields_of_study_in_academies", (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

app.post("/register", (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;

    const sql = `INSERT INTO users (name, surname, email, password) VALUES ("${name}", "${surname}", "${email}", "${password}")`;

    db.query(sql, function(err) {
        if (err) throw err;
        res.end();
    });

});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sql = `SELECT id_user, email, password FROM users`;

    db.query(sql, function (err,row) {
        let result = Object.values(JSON.parse(JSON.stringify(row)));
        let matchedUser = result
            .find((user) => user.email === email && user.password === password)

        if(matchedUser) {
            res.send({
                userId: matchedUser.id_user,
                userEmail: matchedUser.email
            });
        }
        else {
            res.sendStatus(401);
        }
    });

})

app.listen(3001, () => console.log("Server started on port 3001"))