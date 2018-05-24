/**
 *@author: yeisongutierrez
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");
//crear solicitud
/**
Project.create({ id: 11 }).then(function (project) {
  user.addProjects([project, 12]);
});
*/
exports.createSolicitude = function (req, res) {
    models.SOLICITUDE.create(req.body).then(function (newSolicitude) {
        console.log('New newSolicitude ' + newSolicitude.practics + ' has been created');
        //Genero la respuesta http 201 (created) con un json con el nuevo estudiante
        res.status(201).json(newSolicitude);
    });
};
//ELIMINAR SOLICITUDE |delete|
exports.cancelSolicitude = function (req, res) {

};
//leer solicitud para el dia
exports.getSolicitudeByDate = function (req, res) {
    models.SOLICITUDE.findAll({
        where: {
            dateSolicitude: req.body.date
        }
    }).then(function (solicitude) {
        console.log('there is ' + solicitude.length + ' solicitude for the date' + req.body.date);
        res.status(200).json(solicitude);
    });
};
//leer solicituddes por estado
exports.getSolicitudeByState = function (req, res) {
    models.SOLICITUDE.findAll({
        where: {
            state: req.body.state
        }
    }).then(function (solicitude) {
        console.log('there is ' + solicitude.length + ' solicitude with state: ' + req.body.state);
        res.status(200).json(solicitude);
    });
};
//leer solicitud gestionada por manager
exports.getsolicitudeByManager = function (req, res) {
    models.SOLICITUDE.findAll({
        where: {
            idManager: req.body.manager
        }
    }).then(function (solicitude) {
        console.log('there is ' + solicitude.length + ' gestioned by the manager: ' + req.body.manager);
        res.status(200).json(solicitude);
    });
};
//obtener lista de materiales
exports.getMaterialList = function (req, res) {
    models.SOLICITUDE.findAll({
        include: [{
            model: models.MATERIALS,
            as: 'materials'
    }],
        where: {
            idSolicitude: req.params.id
        }
    }).then(function (solicitudes) {
        console.log(JSON.stringify(solicitudes));
        res.status(200).json(solicitudes);
    });
};