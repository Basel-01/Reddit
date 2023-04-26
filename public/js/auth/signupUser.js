// eslint-disable-next-line no-unused-vars
const signupUser = () => {
  const email = document.querySelector('.signup-wrapper .email');
  const name = document.querySelector('.signup-wrapper .name');
  const password = document.querySelector('.signup-wrapper .password');
  const confirmPassword = document.querySelector('.signup-wrapper .confirm-password');

  // eslint-disable-next-line no-undef
  const error = signupValidation(email, name, password, confirmPassword);
  if (error) return;

  fetch('/api/v1/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      name: name.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        if (data.message === 'This email is already registered') {
          email.classList.remove('valid', 'invalid');
          email.classList.add('invalid');
          email.parentElement.querySelector('.error-message').style.display = 'block';
          email.parentElement.querySelector('.error-message').textContent = data.message;
        } else if (data.message === 'This name is already taken') {
          name.classList.remove('valid', 'invalid');
          name.classList.add('invalid');
          name.parentElement.querySelector('.error-message').style.display = 'block';
          name.parentElement.querySelector('.error-message').textContent = data.message;
        }
      } else {
        window.location.href = '/home';
      }
    })
    .catch(() => console.log('something went wrong'));
};
