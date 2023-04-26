const postsRouter = require('express').Router();

const { checkAuth } = require('../../middlewares');
const { upload } = require('../../utils/multer');
const { getAllNotLoggedPostsController, getAllPostsController, addPostController, getProfilePostsController } = require('../../controllers/apiController/posts');

postsRouter.get('/not-logged', getAllNotLoggedPostsController);

postsRouter.get('/', checkAuth, getAllPostsController);

postsRouter.post('/', checkAuth, upload.single('post-img'), addPostController);

postsRouter.get('/:username', checkAuth, getProfilePostsController);

module.exports = postsRouter;
