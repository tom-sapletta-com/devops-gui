const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const auth = require('./src/auth');

//var FileList = [];
const indexRouter = require('./routes/index');
const batRouter = require('./routes/bat');
// var batqRouter = require('./routes/batq');
const projectRouter = require('./routes/project');

const app = express();

// TODO: load athentication data for API,
app.use(auth);

// TODO: people accounts skype, email, etc
// TODO: Load environment.js and load Path, and specific
// TODO: load project.js file and load to the projectLIst

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/bat', batRouter);
// app.use('/batq', batqRouter);
app.use('/project/', projectRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
