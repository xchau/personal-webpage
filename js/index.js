'use strict';

(() => {
  const test = $('<div>').addClass('cool');
  console.log(test);

  const showOverlayOnHover = () => {
    const grid = document.querySelector('#porfolio-grid');

    grid.addEventListener('mouseover', (event) => {
      const target = event.target;

      if (target.nodeName === 'IMG') {
        const label = target.dataset.name;
        const overlay = target.nextElementSibling;
        const top = overlay.children[0].children[0];
        const bottom = overlay.children[1].children[0];
        // const

        top.innerText = label;

        overlay.classList.remove('hidden');
        overlay.classList.add('fade-in');


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
