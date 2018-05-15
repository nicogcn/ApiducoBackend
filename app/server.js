//MAIN APP
var express = require('express'), app = express(), port = process.env.PORT || 3000;
//imports
var bodyParser = require('body-parser');
var laboratoriesRoutes = require('./routes/laboratoriesRoutes');
var lessonsRoutes = require('./routes/lessonsRoutes');
var managerRoutes = require('./routes/managerRoutes');
var materialsRoutes = require('./routes/materialsRoutes');
var solicitudeRoutes = require('./routes/solicitudeRoutes');
var studentsRoutes = require('./routes/studentsRoutes');
var teachersRoutes = require('./routes/teachersRoutes');

var dateFormat = require('dateformat');
//Body post parse
app.use(bodyParser.json());
app.use(express.json());
//Metho origin
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
//Routes
app.use('/laboratories', laboratoriesRoutes);
app.use('/lessons', lessonsRoutes);
app.use('/manager', managerRoutes);
app.use('/materials', materialsRoutes);
app.use('/solicitude', solicitudeRoutes);
app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);

console.log('ApiducoApp created at: ' + dateFormat(Date.now()));

app.listen(port);

console.log('ApiducoServer listening at: ' + port);
