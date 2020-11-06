// Endpoints for external data
//clase express.Router para crear manejadores de rutas montables y modulares.
//Una instancia Router es un sistema de middleware y direccionamiento completo; por este motivo,
// a menudo se conoce como una “miniaplicación”.

/*const { Router } = require('express');
const router = new Router();*/

var express = require('express');
var router = express.Router();

const UserController = require('../controllers/user');

router.get('/', (req, res) =>{
    res.send(UserController.fetch());
});

module.exports = router;