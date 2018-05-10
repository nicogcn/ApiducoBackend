//MAIN APP
var express = require('express'), app = express(), port = process.env.PORT || 3000;
//imports
var bodyParser = require('body-parser');
var studentRoutes = require('./routes/studentsRoutes');
var dateFormat = require('dateformat');
//Body post parse
app.use(bodyParser.json());
app.use(express.json());
//Routes
app.use('/students', studentRoutes);

console.log('ApiducoApp created at: ' + dateFormat(Date.now()));

app.listen(port);

console.log('ApiducoServer listening at: ' + port);