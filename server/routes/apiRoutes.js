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

router.get("/addresses", (req,res)=>{
    db.query("SELECT * FROM addresses WHERE id_address <= 9", (err,result)=>{
        err ? console.log(err) : res.send(result)
    });
});

router.get("/favourites", (req, res) => {
    const userId = req.query.userId;
    const sql = `SELECT * FROM favourites WHERE id_user = "${userId}"`;

    db.query(sql, (err, row) => {
        let result = Object.values(JSON.parse(JSON.stringify(row)));
        err ? console.log(err) : res.send(result);
    })
})

router.post("/addToFavourites", (req, res) => {
    const userId = req.body.id_user;
    const academyId = req.body.id_academy;

    db.query(`INSERT INTO favourites (id_user, id_academy) VALUES ("${userId}", "${academyId}")`, (err, result) => {
        err ? console.log(err) : res.send(result);
    });
});

router.delete("/deleteFromFavourites", (req, res) => {
    const userId = req.body.id_user;
    const academyId = req.body.id_academy;

    db.query(`DELETE FROM favourites WHERE id_user = "${userId}" and id_academy = "${academyId}"`, (err, result) => {
        err ? console.log(err) : res.send(result);
    });
})

module.exports = router;