const loginButtons = Array.from(document.querySelectorAll('.login-btn'));

loginButtons.forEach(loginBtn => {
  loginBtn.addEventListener('click', () => {
    renderLogin();
  });
});

const renderLogin = () => {
  if (document.querySelector('.login-wrapper')) {
    return;
  }
  if (document.querySelector('.signup-wrapper')) {
    document.querySelector('.signup-wrapper').remove();
  }

  document.body.style.overflow = 'hidden';

  const loginWrapper = document.createElement('div');
  loginWrapper.classList.add('wrapper', 'login-wrapper');

  const login = document.createElement('div');
  login.classList.add('login');

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-x', 'close');
  closeIcon.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    loginWrapper.remove();
  });

  const loginHeader = document.createElement('h3');
  loginHeader.textContent = 'Log In';

  const loginText = document.createElement('p');
  loginText.textContent = 'By continuing, you agree are setting up a Reddit account and agree to our User Agreement and Privacy Policy.';

  const loginForm = document.createElement('form');
  loginForm.addEventListener('submit', (e) => e.preventDefault());

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

  const loginBtn = document.createElement('button');
  loginBtn.classList.add('login-action');
  loginBtn.textContent = 'Log In';
  loginBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    loginUser();
  });

  const signUpText = document.createElement('span');
  const signUpLink = document.createElement('a');
  signUpText.textContent = 'New to Reddit? ';
  signUpLink.classList.add('signup-btn');
  signUpLink.textContent = 'Sign Up';
  signUpLink.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    renderSignup();
  });

  signUpText.appendChild(signUpLink);

  const errorMessage = document.createElement('span');
  errorMessage.classList.add('error-message');

  userNameGroup.appendChild(userNameInput);
  userNameGroup.appendChild(userNameLabel);
  userNameGroup.appendChild(errorMessage);

  passwordGroup.appendChild(passwordLabel);
  passwordGroup.appendChild(passwordInput);
  passwordGroup.appendChild(errorMessage.cloneNode(true));

  loginForm.appendChild(userNameGroup);
  loginForm.appendChild(passwordGroup);
  loginForm.appendChild(loginBtn);

  login.appendChild(closeIcon);
  login.appendChild(loginHeader);
  login.appendChild(loginText);
  login.appendChild(loginForm);
  login.appendChild(signUpText);

  loginWrapper.appendChild(login);

  document.body.appendChild(loginWrapper);
};
