// eslint-disable-next-line no-unused-vars
const loginUser = () => {
  const name = document.querySelector('.login-wrapper .name');
  const password = document.querySelector('.login-wrapper .password');

  // eslint-disable-next-line no-undef
  const error = loginValidation(name, password);
  if (error) return;

  fetch('/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value
    })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        if (data.message === 'Incorrect username or password') {
          name.classList.remove('valid', 'invalid');
          name.classList.add('invalid');
          password.classList.remove('valid', 'invalid');
          password.classList.add('invalid');
          name.parentElement.querySelector('.error-message').style.display = 'block';
          name.parentElement.querySelector('.error-message').textContent = data.message;
        }
      } else {
        window.location.href = '/home';
      }
    })
    .catch(() => console.log('something went wrong'));
};
