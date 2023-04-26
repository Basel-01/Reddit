const signupButtons = Array.from(document.querySelectorAll('.signup-btn'));

signupButtons.forEach(signupBtn => {
  signupBtn.addEventListener('click', () => {
    renderSignup();
  });
});

const renderSignup = () => {
  if (document.querySelector('.signup-wrapper')) {
    return;
  }
  if (document.querySelector('.login-wrapper')) {
    document.querySelector('.login-wrapper').remove();
  }

  document.body.style.overflow = 'hidden';

  const signupWrapper = document.createElement('div');
  signupWrapper.classList.add('wrapper', 'signup-wrapper');

  const signup = document.createElement('div');
  signup.classList.add('signup');

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-x', 'close');
  closeIcon.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    signupWrapper.remove();
  });

  const signupHeader = document.createElement('h3');
  signupHeader.textContent = 'Sign Up';

  const signupText = document.createElement('p');
  signupText.textContent = 'By continuing, you are setting up a Reddit account and agree to our User Agreement and Privacy Policy.';

  const signupForm = document.createElement('form');
  signupForm.addEventListener('submit', (e) => e.preventDefault());

  const emailGroup = document.createElement('div');
  emailGroup.classList.add('input-group');
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email';
  const emailInput = document.createElement('input');
  emailInput.addEventListener('input', () => {
    if (emailInput.value) {
      emailGroup.dataset.empty = 'false';
    } else {
      emailGroup.dataset.empty = 'true';
    }
  });
  emailInput.type = 'text';
  emailInput.classList.add('email');
  emailInput.name = 'email';

  const userNameGroup = document.createElement('div');
  userNameGroup.classList.add('input-group');
  const userNameLabel = document.createElement('label');
  userNameLabel.textContent = 'Uesername';
  const userNameInput = document.createElement('input');
  userNameInput.addEventListener('input', () => {
    if (userNameInput.value) {
      userNameGroup.dataset.empty = 'false';
    } else {
      userNameGroup.dataset.empty = 'true';
    }
  });
  userNameInput.type = 'text';
  userNameInput.classList.add('name');
  userNameInput.name = 'username';

  const passwordGroup = document.createElement('div');
  passwordGroup.classList.add('input-group');
  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Password';
  const passwordInput = document.createElement('input');
  passwordInput.addEventListener('input', () => {
    if (passwordInput.value) {
      passwordGroup.dataset.empty = 'false';
    } else {
      passwordGroup.dataset.empty = 'true';
    }
  });
  passwordInput.type = 'password';
  passwordInput.classList.add('password');
  passwordInput.name = 'password';

  const confirmPasswordGroup = document.createElement('div');
  confirmPasswordGroup.classList.add('input-group');
  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.textContent = 'Confirm password';
  const confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.value) {
      confirmPasswordGroup.dataset.empty = 'false';
    } else {
      confirmPasswordGroup.dataset.empty = 'true';
    }
  });
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.classList.add('confirm-password');
  confirmPasswordInput.name = 'confirm-password';

  const signupBtn = document.createElement('button');
  signupBtn.classList.add('signup-action');
  signupBtn.textContent = 'Sign Up';
  signupBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    signupUser();
  });

  const logInText = document.createElement('span');
  const logInLink = document.createElement('a');
  logInText.textContent = 'Already a redditor? ';
  logInLink.classList.add('login-btn');
  logInLink.textContent = 'Log In';
  logInLink.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    renderLogin();
  });

  const errorMessage = document.createElement('span');
  errorMessage.classList.add('error-message');

  logInText.appendChild(logInLink);

  emailGroup.appendChild(emailInput);
  emailGroup.appendChild(emailLabel);
  emailGroup.appendChild(errorMessage);

  userNameGroup.appendChild(userNameInput);
  userNameGroup.appendChild(userNameLabel);
  userNameGroup.appendChild(errorMessage.cloneNode(true));

  passwordGroup.appendChild(passwordInput);
  passwordGroup.appendChild(passwordLabel);
  passwordGroup.appendChild(errorMessage.cloneNode(true));

  confirmPasswordGroup.appendChild(confirmPasswordInput);
  confirmPasswordGroup.appendChild(confirmPasswordLabel);
  confirmPasswordGroup.appendChild(errorMessage.cloneNode(true));

  signupForm.appendChild(emailGroup);
  signupForm.appendChild(userNameGroup);
  signupForm.appendChild(passwordGroup);
  signupForm.appendChild(confirmPasswordGroup);
  signupForm.appendChild(signupBtn);

  signup.appendChild(closeIcon);
  signup.appendChild(signupHeader);
  signup.appendChild(signupText);
  signup.appendChild(signupForm);
  signup.appendChild(logInText);

  signupWrapper.appendChild(signup);

  document.body.appendChild(signupWrapper);
};
