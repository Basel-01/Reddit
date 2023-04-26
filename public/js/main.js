// Drop Down Menu
const dropBtn = document.querySelector('header .drop-btn');
const dropDownMenu = document.querySelector('header .drop-down');

dropBtn.addEventListener('click', () => {
  dropDownMenu.classList.toggle('active');
});

// Color Mode
const colorModeBtn = document.querySelector('header .drop-down .color-mode');

colorModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Change Logo
document.querySelector('header .logo img').src = '/assets/reddit-logo-dark.png';
document.querySelector('.color-mode').addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.querySelector('header .logo img').src = '/assets/reddit-logo-dark.png';
  } else {
    document.querySelector('header .logo img').src = '/assets/reddit-logo.png';
  }
});
