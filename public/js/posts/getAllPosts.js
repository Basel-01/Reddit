fetch('/api/v1/posts')
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach(post => {
      // eslint-disable-next-line no-undef
      renderASinglePostDom(post);
    });
  })
  .catch(() => console.log('something went wrong'));
