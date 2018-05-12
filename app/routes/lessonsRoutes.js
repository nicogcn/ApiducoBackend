//Declaro el router
var express = require('express');
var router = express.Router();

//Obtengo el controlador de estudiantes
var controller = require("../controllers/lessonsController");

router.get('/',controller.getAllLessons);
router.get('/:id',controller.getLessonsById);
router.get('/laboratory/:id',controller.getLessonsByLaboratory);
router.get('/schedule/:id',controller.getSchedulesByLessons);

module.exports = router;