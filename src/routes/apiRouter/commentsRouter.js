const commentsRouter = require('express').Router();

const { checkAuth } = require('../../middlewares');
const { getAllCommentsController, addCommentController } = require('../../controllers/apiController/comments');

commentsRouter.get('/:postId', checkAuth, getAllCommentsController);

commentsRouter.post('/:postId', checkAuth, addCommentController);

module.exports = commentsRouter;
