// eslint-disable-next-line no-unused-vars
const createComment = (postId) => {
  const commentText = document.querySelector('.comments-wrapper form .comment-text');

  fetch(`/api/v1/comments/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      commentText: commentText.value
    })
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        // eslint-disable-next-line no-undef
        renderASingleCommentDom(data.data, document.querySelector('.comments-wrapper .comments-container'));
        const commentsCount = document.querySelector('.controllers .comments .comments-count');
        commentsCount.textContent++;
      }
    })
    .catch(() => console.log('something went wrong'));
};
