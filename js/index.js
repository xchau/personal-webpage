'use strict';

(() => {
  const showOverlayOnHover = () => {
    const grid = document.querySelector('#porfolio-grid');

    grid.addEventListener('mouseover', (event) => {
      const target = event.target;

      if (target.nodeName === 'IMG') {
        const label = target.dataset.name;
        // const height = target.offsetHeight;
        // const width = target.offsetWidth;
        const overlay = target.nextElementSibling;
        const top = overlay.children[0].children[0];

        top.innerText = label;

        overlay.classList.remove('hidden');
        overlay.classList.add('fade-in');
        // overlay.style.width = `${width}px`;
        // overlay.style.top = `${height / 1.6}px`;

        // console.log(target.children);
        // console.log(overlay);

        overlay.addEventListener('mouseout', (e) => {
          overlay.classList.add('hidden');
        });
      }
    });
  };

  // const hideOverlay = () => {
  //   const grid = document.querySelector('#porfolio-grid');
  //
  //   grid.addEventListener('mouseout', (event) => {
  //     const target = event.target;
  //
  //     if (target.nodeName === 'IMG') {
  //       const overlay = target.nextElementSibling;
  //       console.log(overlay);
  //
  //       overlay.classList.add('hidden');
  //
  //     }
  //   });
  // }

  showOverlayOnHover();


})();
