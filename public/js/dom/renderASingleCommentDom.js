// eslint-disable-next-line no-unused-vars
const renderASingleCommentDom = (comment, commentsContainer) => {
  const postDate = new Date(comment.date);
  const currentDate = new Date();
  const timeDiff = currentDate - postDate;

  const timeDiffSeconds = Math.floor(timeDiff / 1000);
  let finalDate;
  if (timeDiffSeconds < 60) {
    finalDate = `${timeDiffSeconds} seconds ago`;
  } else if (timeDiffSeconds < 3600) {
    const minutes = Math.floor(timeDiffSeconds / 60);
    finalDate = `${minutes} m`;
  } else if (timeDiffSeconds < 86400) {
    const hours = Math.floor(timeDiffSeconds / 3600);
    finalDate = `${hours} h`;
  } else {
    const days = Math.floor(timeDiffSeconds / 86400);
    finalDate = `${days} d`;
  }

  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');

  const commentHead = document.createElement('div');
  commentHead.classList.add('comment-head');

  const userImageAnchor = document.createElement('a');
  userImageAnchor.classList.add('user-img');
  userImageAnchor.href = `/user/${comment.name}`;
  const userImage = document.createElement('img');
  if (comment.img) {
    userImage.src = `/assets/${comment.img}`;
  } else {
    userImage.src = '../assets/logo.png';
  }
  userImage.alt = 'user image';
  userImageAnchor.appendChild(userImage);
  const userNameAnchor = document.createElement('a');
  userNameAnchor.href = `/user/${comment.name}`;
  userNameAnchor.classList.add('posted-by');
  userNameAnchor.textContent = comment.name;
  const dotSpan = document.createElement('span');
  dotSpan.classList.add('dot');
  dotSpan.textContent = '•';
  const elapsedTime = document.createElement('span');
  elapsedTime.classList.add('elapsed-time');
  elapsedTime.textContent = finalDate;

  const commentText = document.createElement('p');
  commentText.classList.add('comment-text');
  commentText.textContent = comment.text;

  commentHead.appendChild(userImageAnchor);
  commentHead.appendChild(userNameAnchor);
  commentHead.appendChild(dotSpan);
  commentHead.appendChild(elapsedTime);
  commentElement.appendChild(commentHead);
  commentElement.appendChild(commentText);
  commentsContainer.appendChild(commentElement);
};
