const profileName = window.location.href.split('user/')[1];

fetch(`/api/v1/posts/${profileName}`)
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach(post => {
      // eslint-disable-next-line no-undef
      renderASinglePostDom(post);
    });
  })
  .catch(() => console.log('something went wrong'));
