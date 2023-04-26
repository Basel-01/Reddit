// eslint-disable-next-line no-unused-vars
const signupValidation = (emailInput, nameInput, passwordInput, confirmPasswordInput) => {
  const inputs = [emailInput, nameInput, passwordInput, confirmPasswordInput];
  let error = false;

  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.querySelector('.error-message').style.display = 'block';
      input.parentElement.querySelector('.error-message').textContent = 'This field is required';
      input.classList.remove('valid', 'invalid');
      input.classList.add('invalid');
      error = true;
    } else {
      input.parentElement.querySelector('.error-message').style.display = 'none';
      input.parentElement.querySelector('.error-message').textContent = '';
      input.classList.remove('valid', 'invalid');
      input.classList.add('valid');
    }
  });

  if (emailInput.value) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.([cC][oO][mM]|[nN][eE][tT])$/;
    if (emailRegex.test(emailInput.value)) {
      emailInput.parentElement.querySelector('.error-message').style.display = 'none';
      emailInput.parentElement.querySelector('.error-message').textContent = '';
      emailInput.classList.remove('valid', 'invalid');
      emailInput.classList.add('valid');
    } else {
      emailInput.parentElement.querySelector('.error-message').style.display = 'block';
      emailInput.parentElement.querySelector('.error-message').textContent = 'Invalid email address';
      emailInput.classList.remove('valid', 'invalid');
      emailInput.classList.add('invalid');
      error = true;
    }
  }

  if (nameInput.value) {
    if (nameInput.value.length > 14) {
      nameInput.parentElement.querySelector('.error-message').style.display = 'block';
      nameInput.parentElement.querySelector('.error-message').textContent = 'Name must be less than 15 characters';
      nameInput.classList.remove('valid', 'invalid');
      nameInput.classList.add('invalid');
      error = true;
    } else {
      const nameRegex = /^[a-zA-Z0-9]*$/;
      if (nameRegex.test(nameInput.value)) {
        nameInput.parentElement.querySelector('.error-message').style.display = 'none';
        nameInput.parentElement.querySelector('.error-message').textContent = '';
        nameInput.classList.remove('valid', 'invalid');
        nameInput.classList.add('valid');
      } else {
        nameInput.parentElement.querySelector('.error-message').style.display = 'block';
        nameInput.parentElement.querySelector('.error-message').textContent = 'Name must contain letters and numbers only';
        nameInput.classList.remove('valid', 'invalid');
        nameInput.classList.add('invalid');
        error = true;
      }
    }
  }

  if (passwordInput.value) {
    if (passwordInput.value.length < 6) {
      passwordInput.parentElement.querySelector('.error-message').style.display = 'block';
      passwordInput.parentElement.querySelector('.error-message').textContent = 'Password must be at least 6 characters long';
      passwordInput.classList.remove('valid', 'invalid');
      passwordInput.classList.add('invalid');
      error = true;
    } else if (passwordInput.value.length > 30) {
      passwordInput.parentElement.querySelector('.error-message').style.display = 'block';
      passwordInput.parentElement.querySelector('.error-message').textContent = 'Password must be less than 30 characters';
      passwordInput.classList.remove('valid', 'invalid');
      passwordInput.classList.add('invalid');
      error = true;
    }
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.parentElement.querySelector('.error-message').style.display = 'block';
    confirmPasswordInput.parentElement.querySelector('.error-message').textContent = 'Passwords do not match';
    confirmPasswordInput.classList.remove('valid', 'invalid');
    confirmPasswordInput.classList.add('invalid');
    error = true;
  }

  return error;
};
