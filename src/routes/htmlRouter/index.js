const htmlRouter = require('express').Router();

const { getHomePage, getProfilePage } = require('../../controllers/htmlController');

htmlRouter.get('/home', getHomePage);

htmlRouter.get('/user/:username', getProfilePage);

module.exports = htmlRouter;
