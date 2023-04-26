require('dotenv').config();

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const apiRouter = require('./routes/apiRouter');
const htmlRouter = require('./routes/htmlRouter');
const { clientError, serverError } = require('./controllers/apiController/errors');
const { checkLoggedIn } = require('./middlewares');

const app = express();

app.set('port', process.env.PORT || 3000);

app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/api/v1', apiRouter);

app.use('/', htmlRouter);

app.use(clientError);

app.use(serverError);

module.exports = app;
