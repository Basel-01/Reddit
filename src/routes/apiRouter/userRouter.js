const usersRouter = require('express').Router();

const { checkAuth } = require('../../middlewares');
const { upload } = require('../../utils/multer');
const { signupController, loginController, loggedInUserDataController, logoutController, profileUserDataController, changeUserImageController } = require('../../controllers/apiController/users');

usersRouter.get('/', checkAuth, loggedInUserDataController);

usersRouter.post('/signup', signupController);

usersRouter.post('/login', loginController);

usersRouter.get('/logout', logoutController);

usersRouter.get('/profile/:username', checkAuth, profileUserDataController);

usersRouter.post('/image', checkAuth, upload.single('user-img'), changeUserImageController);

module.exports = usersRouter;
