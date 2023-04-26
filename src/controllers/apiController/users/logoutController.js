const logoutController = (req, res) => {
  res
    .clearCookie('token')
    .json({
      error: false,
      data: {
        message: 'User Loged Out Successfully'
      }
    });
};

module.exports = logoutController;
