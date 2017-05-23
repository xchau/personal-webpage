'use strict';

(() => {
  const createOverlay = (attrs) => {
    const ovBox = document.createElement('div');
    const ovTop = document.createElement('div');
    const ovBottom = document.createElement('div');

    ovBox.className = `hidden overlay-box ${attrs.imgSize}`;
    ovTop.classList.add('overlay-top');
    ovBottom.classList.add('overlay-bottom');

    const title = document.createElement('p');
    const infoLink = document.createElement('a');
    const divider = document.createElement('span');
    const demoLink = document.createElement('a');

    title.classList.add('project-title');
    title.innerText = attrs.title;
    infoLink.classList.add('project-link');
    infoLink.innerText = 'Info';
    demoLink.classList.add('project-link');
    demoLink.innerText = 'Demo';
    divider.classList.add('divider');
    divider.innerHTML = '&#8901;';

    ovTop.appendChild(title);
    ovBottom.appendChild(infoLink);
    ovBottom.appendChild(divider);
    ovBottom.appendChild(demoLink);
    ovBox.appendChild(ovTop);
    ovBox.appendChild(ovBottom);

    return ovBox;
  };

  const createListItem = (attrs) => {
    const li = document.createElement('li');
    const prBox = document.createElement('div');
    const img = document.createElement('img');

    prBox.classList.add('project-box');
    img.className = `project ${attrs.imgSize}`;
    img.setAttribute('data-id', attrs.id);
    img.setAttribute('src', `./assets/img/${attrs.imgName}`);
    prBox.appendChild(img);
    li.appendChild(prBox);

    const overlay = createOverlay(attrs);

    prBox.appendChild(overlay);

    console.log(prBox);
  };


  $.ajax({
    contentType: 'application/json',
    dataType: 'json',
    type: 'get',
    url: 'http://localhost:8000/api/projects'
  })
  .then((projects) => {
    for (const project of projects) {
      createListItem(project);
    }
  })
  .catch((err) => console.log(err))

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
