const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
//setting
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(multer({
    dest: path.join(__dirname,'public/img/uploads')})
    .single('image'));

//global variables

//static files
app.set(express.static(path.join(__dirname,'views')));

//routes
app.use(require('./routes/index'))
//start server

app.listen(app.get('port'),() =>{
    console.log('server on port ',app.get('port'));
})