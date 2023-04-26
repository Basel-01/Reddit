const signupController = require('./signupController');
const loginController = require('./loginController');
const loggedInUserDataController = require('./loggedInUserDataController');
const logoutController = require('./logoutController');
const profileUserDataController = require('./profileUserDataController');
const changeUserImageController = require('./changeUserImageController');

module.exports = {
  signupController,
  loginController,
  loggedInUserDataController,
  logoutController,
  profileUserDataController,
  changeUserImageController
};
