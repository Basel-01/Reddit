// eslint-disable-next-line no-unused-vars
const getAllComments = (postId) => {
  fetch(`/api/v1/comments/${postId}`)
    .then(res => res.json())
    .then(data => {
      // eslint-disable-next-line no-undef
      commentsDom(data.data, postId);
    })
    .catch(() => console.log('something went wrong'));
};
