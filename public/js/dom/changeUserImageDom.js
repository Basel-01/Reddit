// eslint-disable-next-line no-unused-vars
const changeUserImageDom = () => {
  const details = document.querySelector('.user-info .details');

  const form = document.createElement('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  const ImageInput = document.createElement('input');
  ImageInput.type = 'file';
  ImageInput.name = 'user-img';
  ImageInput.id = 'img';
  ImageInput.addEventListener('input', () => {
    // eslint-disable-next-line no-undef
    changeUserImage(ImageInput.files[0]);
  });

  const ImageCustomInput = document.createElement('label');
  ImageCustomInput.textContent = 'Choose New Image';
  ImageCustomInput.setAttribute('for', 'img');

  form.appendChild(ImageInput);
  form.appendChild(ImageCustomInput);
  details.appendChild(form);
};
