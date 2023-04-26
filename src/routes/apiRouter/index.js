const apiRouter = require('express').Router();

const userRouter = require('./userRouter');
const postsRouter = require('./postsRouter');
const votesRouter = require('./votesRouter');
const commentsRouter = require('./commentsRouter');

apiRouter.use('/user', userRouter);

apiRouter.use('/posts', postsRouter);

apiRouter.use('/votes', votesRouter);

apiRouter.use('/comments', commentsRouter);

module.exports = apiRouter;
