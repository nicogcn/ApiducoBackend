/**
 *@author: sebastian pachón
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");

exports.getAllManagers = function (req, res) {
    models.MANAGERS.all().then(function(managers) { 
        console.log('There is ' + managers.length + ' managers');
        res.status(200).json(managers);
    });
};
//Obtener laboratorista por id
exports.getManagerById = function (req, res) {
    models.MANAGERS.findById(req.params.id).then(function(manager){
       console.log(manager.firstName + ' found');
        res.status(200).json(manager);
    });
};
//registrar laboratorista
exports.createManager = function (req, res) { //req -> http request , res -> http response
    models.MANAGERS.create(req.body).then(function (newManager) {
        console.log('New manager ' + newManager.firstName + ' has been created');
        res.status(201).json(newManager);
    });        
};
//modificar laboratorista
exports.updateManager = function (req, res) {
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
        console.log(deleted == 1 ? 'Deleted record completed sucesfully' : 'The record not exist');
        res.status(204).send();
    });
};
