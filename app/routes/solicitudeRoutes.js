//Declaro el router
var express = require('express');
var router = express.Router();

//Obtengo el controlador de estudiantes
var controller = require("../controllers/solicitudeController");

router.post('/', controller.createSolicitude);
router.post('/date',controller.getSolicitudeByDate);
router.post('/state',controller.getSolicitudeByDate);
router.post('/manager',controller.getsolicitudeByManager);
//router.put('/:id',controller.cancelSolicitude); por implementar
router.get('/:id/materials',controller.getMaterialList);

module.exports = router;