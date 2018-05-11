/**
 *@author: Nicolás Eduardo Aldana
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");

exports.getTeachersById = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
    models.TEACHERS.findById(req.params.id).then(function(teacher){
       console.log(teacher.name + ' found') 
        res.status(200).json(teacher);
    });
};