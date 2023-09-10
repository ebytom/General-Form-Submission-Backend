// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var serviceRouter = require('./routes/service');
var form2Router = require('./routes/form2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/services', serviceRouter);

app.use('/form2', form2Router);

const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/resources/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "." + (ext = file.originalname.split(".").pop()))
  }
})

const upload = multer({ storage: fileStorageEngine });
// const upload2 = multer({ dest: 'uploads/' });

app.post('/uploadFile', upload.single("file"), (req, res) => {
  res.send(req.file.filename)
});

app.get('/downloadFile', function (req, res) {
  // const { fileName } = req.query
  // console.log(req.query);
  // const file = `${__dirname}/public/resources/${fileName}`;
  // res.download(file); // Set disposition and send it.
  console.log(req.query.fileId);
  const path = `${__dirname}/${req.query.fileId}`;
  console.log(path);
  res.download(path)
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
