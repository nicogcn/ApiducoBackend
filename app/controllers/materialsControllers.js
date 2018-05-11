/**
 *@author: Yessica Martinez
 * <br>Description: </br> definición de los metodos de acceso modulo profesores	
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");

// Obtener todos los materiales
exports.getAllMaterials = function (req, res) {
    models.MATERIALS.all().then(function(materiales) { 
        console.log('There is ' + materiales.length + ' materials');
        res.status(200).json(materials);
    });
};

// Obtener materiales por estado
exports.getMaterialByState = function (req, res) {
    models.MATERIALS.findAll({where:{state:req.params.state}}).then(function(materials){
       console.log('The state of ' + materials.length + ' materials' );
       res.status(200).json(materials);
    });
};

//materiales por laboratorio
exports.getMaterialByLaboratory = function (req, res) {
    models.MATERIALS.findAll({where:{idLaboratory:req.params.id}}).then(function(materials){
       console.log('the material ' + materials.length + 'of Laboratory');
       res.status(200).json(materials);
    });
};








