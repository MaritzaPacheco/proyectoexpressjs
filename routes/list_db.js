var express = require('express');
var router = express.Router();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:postgres@127.0.0.1:5432/coffee");

/* GET home page. */
router.get('/', function(req, res, next) {
    /*consultas a la DB*/
    query_sql = "select user_id, username, password, email from accounts;";
    db.query(query_sql)
        .then(function (data) {
            res.render('list_db', { title: 'Lista de la DB', list_db: data});
            console.log("DATA:", data);
        })
        .catch(function (error) {
            res.render('list_db', { title: 'Lista de la DB', list_db: {}});
            console.log("ERROR:", error);
        });
});

module.exports = router;
