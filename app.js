var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rfs = require('rotating-file-stream');

var api = require('./routes/api');
var index = require('./routes/index');
var users = require('./routes/users');

var logDirectory = path.join(__dirname, 'log');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 'production' usage only
if ( app.get('env') === 'production' ) {
    app.use(helmet());

    // Logger settings
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
    var accessLogStream = rfs('access.log', {
        interval: '1d', // rotate daily
        path: logDirectory
    });
    app.use(logger('combined', {stream: accessLogStream}))
} else {
    app.use(logger('dev'));
}

app.use('/', index);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
