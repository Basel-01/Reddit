fetch('/api/v1/posts/not-logged')
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach(post => {
      // eslint-disable-next-line no-undef
      renderASingleNotLoggedPostDom(post);
    });
  })
  .catch(() => console.log('something went wrong'));
