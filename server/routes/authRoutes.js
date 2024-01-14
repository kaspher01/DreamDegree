const {db} = require("../config/db");
const router = require("express").Router();
router.post("/register", (req, res) => {
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

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sql = `SELECT id_user, email, password FROM users`;

    db.query(sql, function (err,row) {
        let result = Object.values(JSON.parse(JSON.stringify(row)));
        let matchedUser = result
            .find((user) => user.email === email && user.password === password)

        if(matchedUser) {
            res.send({
                token: {
                    userId: matchedUser.id_user,
                    userEmail: matchedUser.email
                }
            });
        }
        else {
            res.sendStatus(401);
        }
    });
})

module.exports = router;