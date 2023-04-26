// eslint-disable-next-line no-unused-vars
const changeUserImage = (file) => {
  const formData = new FormData();
  formData.append('user-img', file);

  fetch('/api/v1/user/image', {
    method: 'POST',
    body: formData
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        document.querySelector('.prof-user-img img').src = `/assets/${data.data}`;
        document.querySelector('.user-img img').src = `/assets/${data.data}`;
      }
    })
    .catch(() => console.log('something went wrong'));
};
