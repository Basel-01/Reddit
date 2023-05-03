const htmlRouter = require('express').Router();

const { getHomePage, getProfilePage } = require('../../controllers/htmlController');
const { checkAuth } = require('../../middlewares');

htmlRouter.get('/home', checkAuth, getHomePage);

htmlRouter.get('/user/:username', checkAuth, getProfilePage);

module.exports = htmlRouter;
