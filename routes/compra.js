var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    /*consultas a la DB*/
    res.render('compra', {});
});

module.exports = router;
