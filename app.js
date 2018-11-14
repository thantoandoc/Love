const express = require('express');
const logger = require('morgan');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const controllers = require('./routes');

var app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.set('/views', express.static(__dirname + "/views"));

app.set('view engine', 'ejs');
//set assest
app.use('/public', express.static(__dirname + '/public'));


app.use('/',controllers);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});