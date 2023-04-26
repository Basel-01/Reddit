fetch('/api/v1/user')
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      if (data.message === 'Unauthenticated!' || data.message === 'Unauthorized!') {
        window.location.href = '/';
      }
    } else {
      renderUserName(data.data.name);
      renderUserImg(data.data.name, data.data.img);
    }
  })
  .catch(() => console.log('something went wrong'));

const renderUserName = (name) => {
  const userNameFields = Array.from(document.querySelectorAll('.user-name'));
  userNameFields.forEach(userNameField => {
    userNameField.textContent = name;
  });
};

const renderUserImg = (name, img) => {
  const userImageFields = Array.from(document.querySelectorAll('.user-img img'));
  userImageFields.forEach(userImageField => {
    userImageField.parentElement.href = `/user/${name}`;
    if (img) {
      userImageField.src = `/assets/${img}`;
    } else {
      userImageField.src = '../assets/logo.png';
    }
  });
};
