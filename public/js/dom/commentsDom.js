// eslint-disable-next-line no-unused-vars
const commentsDom = (comments, postId) => {
  if (document.querySelector('.comments-wrapper')) {
    document.querySelector('.comments-wrapper').remove();
  }

  document.body.style.overflow = 'hidden';

  const commentsWrapper = document.createElement('div');
  commentsWrapper.classList.add('wrapper', 'comments-wrapper');

  const commentsElement = document.createElement('div');
  commentsElement.classList.add('comments-element');

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-x', 'close');
  closeIcon.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    commentsWrapper.remove();
  });

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');

  comments.forEach(comment => {
    // eslint-disable-next-line no-undef
    renderASingleCommentDom(comment, commentsContainer);
  });

  const createCommentDiv = document.createElement('form');
  createCommentDiv.classList.add('create-comment');

  const commentInput = document.createElement('textarea');
  commentInput.classList.add('comment-text');
  commentInput.name = 'comment-text';
  commentInput.placeholder = 'Comment something';

  const sendCommentIcon = document.createElement('i');
  sendCommentIcon.classList.add('fa-solid', 'fa-paper-plane');
  sendCommentIcon.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    createComment(postId);
    commentInput.value = '';
  });

  createCommentDiv.appendChild(commentInput);
  createCommentDiv.appendChild(sendCommentIcon);

  commentsElement.appendChild(closeIcon);
  commentsElement.appendChild(commentsContainer);
  commentsElement.appendChild(createCommentDiv);

  commentsWrapper.appendChild(commentsElement);

  document.body.appendChild(commentsWrapper);
};
