'use strict';

(() => {
  function copyText(text) {
    const textArea = document.createElement("textarea");

    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';

      console.log('Copied ' + msg);
    }
    catch (err) {
      console.log('Cannot copy');
    }

    document.body.removeChild(textArea);
  }


  const copyEmail = document.querySelector('.email');
  const copyPhone = document.querySelector('.phone');

  copyEmail.addEventListener('click', () => {
    copyText('xiu.chau@gmail.com');
  });

  copyPhone.addEventListener('click', () => {
    copyText('206-607-7138');
  });
})();
