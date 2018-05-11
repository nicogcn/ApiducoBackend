/**
 *@author: 3Y2J
 * <br>Description: </br> definición de los metodos de acceso modulo profesores	
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");

// Obtener profesor por ID
exports.getTeachersById = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
    models.TEACHERS.findById(req.params.id).then(function(teacher){
       console.log(teacher.name + ' found') 
        res.status(200).json(teacher);
    });

// Obtener todos los profesores
exports.getAllTeachers = function (req, res) {
    models.TEACHERS.all().then(function(teachers) { 
        console.log('There is ' + teachers.length + ' teachers');
        res.status(200).json(teacher);
    });
};

// Obtener asignatura dictada por el profesor
exports.getLesson = funtion(req, res){
    models.TEACHERS.findById(req.params.id).then(function(teacher){
    	console.log(teacher + ' dicta ' + teacher.getLesson); 
    	res.status(200).json(teacher);
    });
};


};