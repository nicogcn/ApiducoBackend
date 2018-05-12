/**
 *@author: sebastian pachón
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");
//Obtener laboratorista por id
exports.getManagerById = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
    models.MANAGERS.findById(req.params.id).then(function(managers){
       console.log(managers.name + ' found');
        res.status(200).json(manager);
    });
};
//registrar laboratorista
exports.createManager = function (req, res) { //req -> http request , res -> http response
    //modelo.estudiantes.crearnuevo(datos).cuando lo crees (crea la respuesta http con el nuevo estudiante)
    //    !!!!ATENCIÓN!!!! En el objeto request.body viene asi = {document:'#documento',firstName:'Nombre',lastName:'Apellido',code:'elCodigo',age:0} <-- es un JSON
    //En las peticiones tipo POST el dato viene codificado en el 'body' de la petición 
    models.MANAGERS.create(req.body).then(function (newManager) {
        console.log('New manager ' + newManager.firstName + ' has been created');
        //Genero la respuesta http 201 (created) con un json con el nuevo estudiante
        res.status(201).json(newManager);
    });
};
//modificar laboratorista
exports.updateManager = function (req, res) {
    //Peticiones PUT combinan los dos ejemplos anteriores, en el 'body' viaja los nuevos datos' mientras en la url viaja el id a modificar
    models.MANAGERS.update(req.body, {where:{idManager:req.params.id}}).then(function (updatedRows){
        //Este metodo de actualizar retorna el numero de filas que fueron actualizadas, debido a que el id es uno siempre retornara "1"
        console.log(updatedRows + ' rows has been updates sucesfully');
        res.status(200).send();
        //Futuros desarrollos https://medium.com/@sarahdherr/sequelizes-update-method-example-included-39dfed6821d
    });
};
//eliminar laboratorista
exports.deleteManager = function (req, res){
    models.MANAGERS.destroy({where:{idManager:req.params.id}}).then(function (deleted){
        //OPERADOR TERNARIO <- una excelente practica de programación. 
        console.log(deleted == 1 ? 'Deleted record completed sucesfully' : 'The record not exist');
        res.status(204).send();
    });
};
