'use strict';

(() => {
  function copyText(text, cls) {
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

    document.body.removeChild(textArea);
  }

  function createToolTip(elem) {
    const parent = document.querySelector(elem);
    const tooltip = document.createElement('div');
    const span = document.createElement('span');

    tooltip.classList.add('tooltip', 'fade-in');

    span.innerText = 'Copied';
    span.style.color = '#fff';
    span.style.fontFamily = 'opensans-light';
    span.style.fontSize = '14px';

    tooltip.appendChild(span);
    parent.appendChild(tooltip);

    setTimeout(() => {
      tooltip.classList.remove('fade-in');
      tooltip.classList.add('fade-out');
      console.log(tooltip);
    }, 1000);
  }

  // const copyEmail = document.querySelector('.email');
  const copyPhone = document.querySelector('.phone');

  // copyEmail.addEventListener('click', () => {
  //   copyText('xiu.chau@gmail.com');
  //
  //   createToolTip('.email-box');
  // });

  copyPhone.addEventListener('click', () => {
    copyText('206-607-7138');

    createToolTip('.phone-box')
  });
})();
