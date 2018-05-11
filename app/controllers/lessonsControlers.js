/**
 *@author: sebastian pachón
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");
//OBTENER ASIGNATURA
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
       console.log('the lessons ' + lessons.length + 'by Laboratory');
       res.status(200).json(lessons);
    });
};
//obtener horario por asignatura
exports.getSchedulesByLessons = function (req, res) {
    models.SCHEDULES.findAll({where:{idLaboratory:req.params.id}}).then(function(Schedules){
       console.log('the Schedules ' + Schedules.length + 'by lessons');
       res.status(200).json(Schedules);
    });
};