//Declaro el router
var express = require('express');
var router = express.Router();

//Obtengo el controlador de estudiantes
var controller = require("../controllers/managerController");

router.post('/', controller.createManager);
router.get('/:id',controller.getManagerById);
router.put('/:id',controller.updateManager);
router.delete('/:id',controller.deleteManager);

module.exports = router;