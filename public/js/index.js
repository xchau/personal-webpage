'use strict';

(() => {
  const accessModal = (attrs) => {
    const modal = document.getElementById('info-modal');
    const infoLinks = document.querySelectorAll('.info-link');
    const span = document.getElementsByClassName('close')[0];

    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    for (const link of infoLinks) {
      link.addEventListener('click', () => {
        modal.classList.add('fade-in');
        modal.style.display = 'block';
      });
    }
  };

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
    const repoLink = document.createElement('a');

    title.classList.add('project-title');
    title.innerText = attrs.title;
    infoLink.className = 'project-link info-link';
    infoLink.setAttribute('data-id', attrs.id);
    infoLink.innerText = 'Info';
    repoLink.classList.add('project-link');
    repoLink.innerText = 'Repo';
    repoLink.setAttribute('href', attrs.github);
    repoLink.setAttribute('target', '_blank');
    divider.classList.add('divider');
    divider.innerHTML = '&#8901;';

    ovTop.appendChild(title);
    ovBottom.appendChild(infoLink);
    ovBottom.appendChild(divider);
    ovBottom.appendChild(repoLink);
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
    img.setAttribute('src', `./assets/img/${attrs.imgName}`);

    prBox.appendChild(img);
    li.appendChild(prBox);

    const overlay = createOverlay(attrs);

    prBox.appendChild(overlay);

    return prBox;
  };

  const showOverlayOnHover = () => {
    const grid = document.querySelector('#portfolio-grid');
    const body = document.getElementsByTagName('body')[0];

    grid.addEventListener('mouseover', (event) => {
      const target = event.target;

      if (target.nodeName === 'IMG') {
        const overlay = target.nextElementSibling;

        overlay.classList.remove('hidden');
        overlay.classList.add('fade-in');

        overlay.addEventListener('mouseover', () => {
          overlay.classList.remove('hidden');
        });

        overlay.addEventListener('mouseout', (event) => {
          overlay.classList.add('hidden');
        });
      }
    });
  };

  $.ajax({
    contentType: 'application/json',
    dataType: 'json',
    type: 'get',
    // url: 'https://xchau-pws.herokuapp.com/api/projects'
    url: 'http://localhost:8000/api/projects'
  })
  .then((projects) => {
    const grid = document.querySelector('#portfolio-grid');

    for (const project of projects) {
      const listItem = createListItem(project);

      grid.appendChild(listItem);
    }

    showOverlayOnHover();
    accessModal();
  })
  .catch((err) => {
    console.log(err);
  });
})();
