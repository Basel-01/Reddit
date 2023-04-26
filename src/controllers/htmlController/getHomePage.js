const path = require('path');

const getHomePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '..', '..', 'public', 'home.html'));
};

module.exports = getHomePage;
