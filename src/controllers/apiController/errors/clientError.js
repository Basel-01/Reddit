const path = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', '..', '..', 'public', '404.html'));
};

module.exports = clientError;
