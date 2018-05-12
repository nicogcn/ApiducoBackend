//Declaro el router
var express = require('express');
var router = express.Router();

//Obtengo el controlador de estudiantes
var controller = require("../controllers/laboratoriesController");

router.get('/',controller.getAllLaboratories);
router.get('/:id',controller.getlaboratoryById);
router.get('/:id/lessons',controller.getLessonsByLaboratory);

module.exports = router;