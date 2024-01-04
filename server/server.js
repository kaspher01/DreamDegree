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

app.listen(3001, () => console.log("Server started on port 3001"))