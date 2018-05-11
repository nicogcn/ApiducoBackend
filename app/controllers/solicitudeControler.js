/**
 *@author: yeisongutierrez
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");
//crear solicitud
exports.createSolicitude = function (req, res) { //req -> http request , res -> http response
    //modelo.estudiantes.crearnuevo(datos).cuando lo crees (crea la respuesta http con el nuevo estudiante)
    //    !!!!ATENCIÓN!!!! En el objeto request.body viene asi = {document:'#documento',firstName:'Nombre',lastName:'Apellido',code:'elCodigo',age:0} <-- es un JSON
    //En las peticiones tipo POST el dato viene codificado en el 'body' de la petición 
    models.SOLICITUDE.create(req.body).then(function (newSolicitude) {
        console.log('New newSolicitude ' + newSolicitude.practics + ' has been created');
        //Genero la respuesta http 201 (created) con un json con el nuevo estudiante
        res.status(201).json(newSolicitude);
    });
};
//ELIMINAR SOLICITUDE |delete|
exports.deleteSolicitude = function (req, res){
    models.SOLICITUDE.destroy({where:{idSolicitude:req.params.id}}).then(function (deleted){
        //OPERADOR TERNARIO <- una excelente practica de programación. 
        console.log(deleted == 1 ? 'Deleted record completed sucesfully' : 'The record not exist');
        res.status(204).send();
    });
};
//leer solicitud para el dia
exports.getSolicitudeBydate = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
    models.SOLICITUDE.findBydate(req.params.id).then(function(solicitude){
       console.log(solicitude.dateSolicitude + ' found') 
        res.status(200).json(solicitude);
    });
};
//leer solicituddes por estado
exports.getSolicitudeByestado = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
    models.SOLICITUDE.findByestado(req.params.id).then(function(solicitude){
       console.log(solicitude.estado + ' found') 
        res.status(200).json(solicitude);
    });
};
//leer solicitud gestionada por manager
exports.getsolicitudeBymanager = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
    models.SOLICITUDE.findById(req.params.id).then(function(solicitude){
       console.log(solicitude.idManager + ' found') 
        res.status(200).json(solicitide);
    });
};


//obtener lista de materiales
exports.getSolicitudeBymaterialList = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
    models.MATERIAL_SOLICITUDE.findById(req.params.id).then(function(student){
      console.log('There is ' + material_solicitude.length + ' material solicitude');
        res.status(200).json(material_solicitude);
    });
};
