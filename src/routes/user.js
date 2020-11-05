// Endpoints for external data
const { Router } = require('express');
const router = new Router();
const UserController = require('../controllers/user');

router.get('/', (req, res) =>{
    res.send(UserController.fetch());
});

module.exports = router;