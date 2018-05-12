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
    
};
//leer solicitud para el dia
exports.getSolicitudeBydate = function (req, res) {
    models.SOLICITUDE.findAll({where:{dateSolicitude:req.body.date}}).then(function(solicitude){
       console.log('there is ' + solicitude.length + ' solicitude for the date' + req.body.date); 
        res.status(200).json(solicitude);
    });
};
//leer solicituddes por estado
exports.getSolicitudeByestado = function (req, res) {
    models.SOLICITUDE.findAll({where:{state:req.body.state}}).then(function(solicitude){
       console.log('there is ' + solicitude.length + ' solicitude with state: ' + req.body.state); 
        res.status(200).json(solicitude);
    });
};
//leer solicitud gestionada por manager
exports.getsolicitudeBymanager = function (req, res) {
    models.SOLICITUDE.findAll({where:{idManager:req.body.manager}}).then(function(solicitude){
       console.log('there is ' + solicitude.length + ' gestioned by the manager: ' + req.body.manager); 
        res.status(200).json(solicitude);
    });
};


//obtener lista de materiales
exports.getSolicitudeBymaterialList = function (req, res) {
    //por implementar
    
};
