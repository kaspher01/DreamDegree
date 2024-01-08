const {db} = require("../config/db");
const router = require("express").Router();
router.get("/academies", (req,res)=>{
    db.query("SELECT * FROM academies", (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

router.get("/academies/:id", (req,res)=>{
    const id = req.params.id;
    db.query("SELECT * FROM academies WHERE id = ?", id, (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

router.get("/fields", (req,res)=>{
    db.query("SELECT * FROM fields_of_study", (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

router.get("/academiesFields", (req,res)=>{
    db.query("SELECT * FROM fields_of_study_in_academies", (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

module.exports = router;