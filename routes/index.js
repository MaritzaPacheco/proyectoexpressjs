var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*consultas a la DB*/
  res.render('index', { title: 'Express',
    nombre: 'Elvis2e3',
    message: "jajaja",
    error: {status: 55, stack: 12},
    names_online: [{name: "Elvis", phone: 123}, {name: "Maritza", phone: 456}, {name: "Liz", phone: 678}],
    producto: [{nombre: "sandalias",talla: 35, color: "rojo", precio: 450},
      {nombre: "chatitas",talla: 36, color: "amarillo", precio: 129},
      {nombre: "zapato",talla: 39, color: "negro", precio: 300}

    ]
  });
});

module.exports = router;
