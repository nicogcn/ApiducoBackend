var express = require('express');
var router = express.Router();

var controller = require("../controllers/teachersController");

router.get('/',controller.getAllTeachers);
router.get('/:id',controller.getTeachersById);
router.get('/:id/lessons',controller.getLessons);

module.exports = router;