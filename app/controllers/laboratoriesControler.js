/**
 *@author: Yovany Pardo
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models"); 

//Obtener laboratorios
exports.getAllLaboratories = function (req, res) {
    models.LABORATORIES.all().then(function(laboratories) { 
        console.log('There is ' + laboratories.length + ' laboratories ');
        res.status(200).json(laboratories);
    });
};

//Obtener laboratorios por ID
exports.getlaboratoriesById = function (req, res) {
    models.LABORATORIES.findById(req.params.id).then(function(laboratories){
       console.log(laboratoriesName + ' found') 
        res.status(200).json(laboratories);
    });
};

//Obtener asignaturas que se dictan en un laboratorio 
exports.getLessonsByLaboratory = function (req, res) {
    models.LESSONS.findAll({where:{idLaboratory:req.params.id}}).then(function(lessons){
       console.log('the lessons ' + lessons.length + 'by Laboratory');
       res.status(200).json(lessons);
    });
};

//Obtener los horarios de las clases que se dan en el laboratorio
exports.getSchedulesByLaboratory = function (req, res) {
    models.SCHEDULES.findAll({where:{idLaboratory:req.params.id}}).then(function(schedules){
       console.log('the schedules' + schedules.length + 'by Laboratory');
       res.status(200).json(schedules);
    });
}
};