var models = require("../models"); 

models.STUDENTS.findAll().then(function(students) { 
    console.log(JSON.stringify(students));
});
