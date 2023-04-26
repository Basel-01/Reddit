const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', () => {
  fetch('/api/v1/user/logout')
    .then(res => res.json())
    .then(data => {
      if (!data.error) {
        window.location.href = '/';
      }
    })
    .catch(() => console.log('something went wrong'));
});
