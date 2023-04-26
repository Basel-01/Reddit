const profileUserName = window.location.href.split('user/')[1];

fetch(`/api/v1/user/profile/${profileUserName}`)
  .then(res => res.json())
  .then(data => {
    if (!data.error) {
      const userImageFields = document.querySelector('.prof-user-img img');
      if (data.data.info.img) {
        userImageFields.src = `/assets/${data.data.info.img}`;
      } else {
        userImageFields.src = '../assets/logo.png';
      }
      const userNameFields = document.querySelector('.prof-user-name');
      userNameFields.textContent = data.data.info.name;

      if (data.data.logged) {
        // eslint-disable-next-line no-undef
        changeUserImageDom();
      }
    }
  })
  .catch(() => console.log('something went wrong'));
