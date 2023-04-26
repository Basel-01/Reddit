const postsContainer = document.querySelector('.page-content .posts');

// eslint-disable-next-line no-unused-vars
const renderASingleNotLoggedPostDom = (data) => {
  const postDate = new Date(data.date);
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

  const post = document.createElement('div');
  post.classList.add('post');
  const vote = document.createElement('div');
  vote.classList.add('vote');
  const upVote = document.createElement('span');
  upVote.classList.add('material-symbols-outlined', 'vote-btn', 'upvote', 'login-btn');
  upVote.textContent = 'shift';
  upVote.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    renderLogin();
  });
  const voteCount = document.createElement('p');
  voteCount.classList.add('vote-count');
  voteCount.textContent = data.votecount;
  const downVote = document.createElement('span');
  downVote.classList.add('material-symbols-outlined', 'vote-btn', 'downvote', 'login-btn');
  downVote.textContent = 'shift';
  downVote.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    renderLogin();
  });
  vote.appendChild(upVote);
  vote.appendChild(voteCount);
  vote.appendChild(downVote);

  const postInfo = document.createElement('div');
  postInfo.classList.add('post-info');

  const postHead = document.createElement('div');
  postHead.classList.add('post-head');
  const userImageAnchor = document.createElement('a');
  userImageAnchor.classList.add('user-img');
  userImageAnchor.style.cursor = 'pointer';
  userImageAnchor.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    renderLogin();
  });
  const userImage = document.createElement('img');
  if (data.userimage) {
    userImage.src = `/assets/${data.userimage}`;
  } else {
    userImage.src = '../assets/logo.png';
  }
  userImage.alt = 'user image';
  userImageAnchor.appendChild(userImage);
  const userNameAnchor = document.createElement('a');
  userNameAnchor.style.cursor = 'pointer';
  userNameAnchor.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    renderLogin();
  });
  userNameAnchor.classList.add('posted-by');
  userNameAnchor.textContent = data.name;
  const dotSpan = document.createElement('span');
  dotSpan.classList.add('dot');
  dotSpan.textContent = '•';
  const elapsedTime = document.createElement('span');
  elapsedTime.classList.add('elapsed-time');
  elapsedTime.textContent = finalDate;
  postHead.appendChild(userImageAnchor);
  postHead.appendChild(userNameAnchor);
  postHead.appendChild(dotSpan);
  postHead.appendChild(elapsedTime);

  const postText = document.createElement('div');
  postText.classList.add('post-text');
  postText.textContent = data.posttext;

  const postControllers = document.createElement('div');
  postControllers.classList.add('controllers');

  const postCommentsController = document.createElement('div');
  postCommentsController.classList.add('controller', 'comments');
  postCommentsController.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    renderLogin();
  });

  const commentIcon = document.createElement('i');
  commentIcon.classList.add('fa-regular', 'fa-message');

  const commentsCountContainer = document.createElement('span');
  const commentsCount = document.createElement('span');
  commentsCount.classList.add('comments-count');
  commentsCount.textContent = data.comments_num;
  commentsCountContainer.appendChild(commentsCount);
  commentsCountContainer.appendChild(document.createTextNode(' Comments'));

  postCommentsController.appendChild(commentIcon);
  postCommentsController.appendChild(commentsCountContainer);

  postControllers.appendChild(postCommentsController);

  postInfo.appendChild(postHead);
  postInfo.appendChild(postText);
  if (data.postimage) {
    const postImageWrapper = document.createElement('div');
    postImageWrapper.classList.add('post-img');
    const postImage = document.createElement('img');
    postImage.src = `../assets/${data.postimage}`;
    postImage.alt = 'post image';
    postImageWrapper.appendChild(postImage);
    postInfo.appendChild(postImageWrapper);
  }
  postInfo.appendChild(postControllers);

  post.appendChild(vote);
  post.appendChild(postInfo);

  postsContainer.appendChild(post);
};
