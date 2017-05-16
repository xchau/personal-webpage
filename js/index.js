'use strict';

(() => {
  const showOverlayOnHover = () => {
    const projects = document.querySelectorAll('.project');

    const grid = document.querySelector('#porfolio-grid');

    grid.addEventListener('mouseover', (event) => {
      const target = event.target;

      if (target.nodeName === 'IMG') {
        const label = target.dataset.name;
        const height = target.offsetHeight;
        const width = target.offsetWidth;
        const overlay = target.nextElementSibling;

        overlay.classList.remove('hidden');
        overlay.style.width = `${width}px`;
        overlay.style.top = `${height / 2}px`;

        console.log(label, height, width);
        console.log(overlay);
      }

    })
  };

  showOverlayOnHover();


})();
