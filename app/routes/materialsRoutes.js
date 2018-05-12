//Declaro el router
var express = require('express');
var router = express.Router();

//Obtengo el controlador de estudiantes
var controller = require("../controllers/materialsController");

router.get('/',controller.getAllMaterials);
router.get('/:state',controller.getMaterialByState);
router.get('/laboratory/:id',controller.getMaterialByLaboratory);

module.exports = router;