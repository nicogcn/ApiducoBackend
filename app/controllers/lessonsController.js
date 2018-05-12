/**
 *@author: sebastian pachón
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");
//OBTENER ASIGNATURA
exports.getAllLessons = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
 	models.LESSONS.all().then(function(lessons){
       console.log('There is ' + lessons.length + ' lessons');
        res.status(200).json(lessons);
    });
};

exports.getLessonsById = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
 	models.LESSONS.findById(req.params.id).then(function(lessons){
       console.log(lessons.name + ' found') 
        res.status(200).json(lessons);
    });
};
//obtener asignatura por laboratorio
exports.getLessonsByLaboratory = function (req, res) {
    models.LESSONS.findAll({where:{idLaboratory:req.params.id}}).then(function(lessons){
       console.log('there are ' + lessons.length + ' lessons in laboratory: ' + req.params.id);
       res.status(200).json(lessons);
    });
};
//obtener horario por asignatura
exports.getSchedulesByLessons = function (req, res) {
    models.SCHEDULES.findAll({where:{idLaboratory:req.params.id}}).then(function(schedules){
       console.log('there are ' + schedules.length + ' schedules for the lesson: ' + req.params.id);
       res.status(200).json(schedules);
    });
};