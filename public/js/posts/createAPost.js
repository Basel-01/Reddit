// eslint-disable-next-line no-unused-vars
const createAPost = () => {
  const postText = document.querySelector('.create-post-wrapper .post-text').value;
  const postImgFile = document.querySelector('.create-post-wrapper .post-img').files[0];

  const formData = new FormData();
  formData.append('postText', postText);
  formData.append('post-img', postImgFile);

  fetch('/api/v1/posts', {
    method: 'POST',
    body: formData
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        if (data.message === 'Unauthenticated!' || data.message === 'Unauthorized!') {
          window.location.href = '/';
        }
      } else {
        // eslint-disable-next-line no-undef
        renderASinglePostDom(data.data);
      }
    })
    .catch(() => console.log('something went wrong'));
};
