const path = require('path');
const { ValidationError } = require('joi');
const { CustomError } = require('../../../utils/helper');

const serverError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).json({
      error: true,
      message: 'ValidationError'
    });
  } else if (err instanceof CustomError) {
    res.status(err.status).json({
      error: true,
      message: err.message
    });
  } else {
    res.status(500).sendFile(path.join(__dirname, '..', '..', '..', '..', 'public', '500.html'));
  }
};

module.exports = serverError;
