const createPostInput = document.querySelector('.create-post input');

createPostInput.addEventListener('click', () => {
  createPostInput.blur();
  renderCreatePost();
});

const renderCreatePost = () => {
  if (document.querySelector('.create-post-wrapper')) {
    return;
  }

  document.body.style.overflow = 'hidden';

  const createPostWrapper = document.createElement('div');
  createPostWrapper.classList.add('wrapper', 'create-post-wrapper');

  const createPost = document.createElement('div');
  createPost.classList.add('create-post');

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-x', 'close');
  closeIcon.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    createPostWrapper.remove();
  });

  const createPostForm = document.createElement('form');
  createPostForm.addEventListener('submit', (e) => e.preventDefault());

  const postTextGroup = document.createElement('div');
  postTextGroup.classList.add('input-group');
  const postTextLabel = document.createElement('label');
  postTextLabel.textContent = 'what do you think of?';
  const postTextInput = document.createElement('textarea');
  postTextInput.addEventListener('input', () => {
    if (postTextInput.value) {
      postTextGroup.dataset.empty = 'false';
    } else {
      postTextGroup.dataset.empty = 'true';
    }
  });
  postTextInput.type = 'text';
  postTextInput.classList.add('post-text');
  postTextInput.name = 'post-text';

  const createPostBtn = document.createElement('button');
  createPostBtn.classList.add('post-action');
  createPostBtn.textContent = 'Post It!';
  createPostBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    createAPost();
    document.body.style.overflow = 'visible';
    createPostWrapper.remove();
  });

  postTextGroup.appendChild(postTextInput);
  postTextGroup.appendChild(postTextLabel);

  const imageFileInput = document.createElement('input');
  imageFileInput.type = 'file';
  imageFileInput.classList.add('post-img');
  imageFileInput.name = 'post-img';

  createPostForm.appendChild(postTextGroup);
  createPostForm.appendChild(imageFileInput);
  createPostForm.appendChild(createPostBtn);

  createPost.appendChild(closeIcon);
  createPost.appendChild(createPostForm);

  createPostWrapper.appendChild(createPost);

  document.body.appendChild(createPostWrapper);
};
