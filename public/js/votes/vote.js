// eslint-disable-next-line no-unused-vars
const voteAction = (postId, voteType, voteElement) => {
  fetch(`/api/v1/votes/${voteType}/${postId}`)
    .then(res => res.json())
    .then((data) => {
      if (!data.error) {
        voteElement.classList.remove('up', 'down', 'none');
        voteElement.classList.add(data.data.voteState);
        voteElement.querySelector('.vote-count').textContent = data.data.voteCount;
      }
    })
    .catch(() => console.log('something went wrong'));
};
