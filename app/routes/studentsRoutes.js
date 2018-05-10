//Declaro el router
var express = require('express');
var router = express.Router();

//Obtengo el controlador de estudiantes
var controller = require("../controllers/studentsController");

router.post('/', controller.createStudent);
router.get('/',controller.getAllStudents);
router.get('/:id',controller.getStudentById);
router.put('/:id',controller.updateStudent);
router.delete('/:id',controller.deleteStudent);
module.exports = router;