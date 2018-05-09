/**
 *@author: Nicolás Eduardo Aldana
 * <br>Description: </br> definición de los metodos de acceso modulo estudiantes
 */

//IMPORTO LOS MODELOS ....
var models = require("../../models");

//Metodos de acceso

/*
*C R U D   operations

*CREATE
*READ
*UPDATE
*DELETE

*/


//CREAR ESTUDIANTE |create|

//insert into STUDENTS (document, firstName, lastName, code, age) values () .... 
exports.createStudent = function (req, res) { //req -> http request , res -> http response
    //modelo.estudiantes.crearnuevo(datos).cuando lo crees (crea la respuesta http con el nuevo estudiante)
    //    !!!!ATENCIÓN!!!! En el objeto request.body viene asi = {document:'#documento',firstName:'Nombre',lastName:'Apellido',code:'elCodigo',age:0} <-- es un JSON
    //En las peticiones tipo POST el dato viene codificado en el 'body' de la petición 
    models.STUDENTS.create(req.body).then(function (newStudent) {
        console.log('New student ' + newStudent.firstName + ' has been created');
        //Genero la respuesta http 201 (created) con un json con el nuevo estudiante
        res.status(201).json(newStudent);
    });
};

//LEER ESTUDIANTES |read|
//SELECT * FROM STUDENTS;
exports.getAllStudents = function (req, res) {
    //Para APIDUCO no es necesario obtener todos los estudiantes, solo es el ejemplo de como obtener todos los registros de una tabla.
    models.STUDENTS.all().then(function(students) { 
        console.log('There is ' + students.length + ' students');
        res.status(200).json(students);
    });
};

//LEER UN SOLO ESTUDIANTE |read|
//SELECT * FROM STUDENTS WHERE idStudent = ?
exports.getStudentById = function (req, res) {
    //En las peticiones tipo GET los parametros viene en la ruta (URL) quedan guardados en 'req.params'
    models.STUDENTS.findById(req.params.id).then(function(student){
       console.log(student.firstName + ' found') 
        res.status(200).json(student);
    });
};

//MODIFICAR ESTUDIANTE |update|
// UPDATE STUDENTS SET ? = ? WHERE idStudent = ?
exports.updateStudent = function (req, res) {
    //Peticiones PUT combinan los dos ejemplos anteriores, en el 'body' viaja los nuevos datos' mientras en la url viaja el id a modificar
    models.STUDENTS.update(req.body, {where:{idStudent:req.params.id}}).then(function (updatedRows){
        //Este metodo de actualizar retorna el numero de filas que fueron actualizadas, debido a que el id es uno siempre retornara "1"
        console.log(updatedRows + ' rows has been updates sucesfully');
        res.status(200).send();
        //Futuros desarrollos https://medium.com/@sarahdherr/sequelizes-update-method-example-included-39dfed6821d
    });
};

//ELIMINAR ESTUDIANTE |delete|
exports.deleteStudent = function (req, res){
    models.STUDENTS.destroy({where:{idStudent:req.params.id}}).then(function (deleted){
        //OPERADOR TERNARIO <- una excelente practica de programación. 
        console.log(deleted == 1 ? 'Deleted record completed sucesfully' : 'The record not exist');
        res.status(204).send();
    });
};
