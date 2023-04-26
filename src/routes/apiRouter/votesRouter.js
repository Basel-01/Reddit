const votesRouter = require('express').Router();

const { checkAuth } = require('../../middlewares');
const { voteController } = require('../../controllers/apiController/votes');

votesRouter.get('/:voteType/:postId', checkAuth, voteController);

module.exports = votesRouter;
