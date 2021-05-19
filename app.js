var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Routers
var indexRouter = require('./routes/index');
var addressesRouter = require('./routes/addresses');
var adminsRouter = require('./routes/admins');
var brandsRouter = require('./routes/brands');
var cartRouter = require('./routes/cart');
//var categoriesRouter = require('./routes/categories');
var customersRouter = require('./routes/customers');
var ordersRouter = require('./routes/orders');
var productsRouter = require('./routes/products');
//var subCategoriesRouter = require('./routes/sub_categories');
var authRouter = require('./routes/auth');

var loadenv = require('dotenv').config();

var app = express();

// connect to database
const db = require("./models");
const { categories } = require('./models');
db.sequelize.sync({alter:true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/addresses', addressesRouter);
app.use('/admins', adminsRouter);
app.use('/brands', brandsRouter);
app.use('/cart', cartRouter);
//app.use('/categories', categoriesRouter);
app.use('/customers', customersRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);
//app.use('/sub_categories', subCategoriesRouter);
app.use('/', authRouter);

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
