const path = require('path');

const getProfilePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '..', '..', 'public', 'profile.html'));
};

module.exports = getProfilePage;
