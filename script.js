'use strict';

const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
const controls = document.querySelector('.project-controls');
const result = document.querySelector('.filter-result');

if (controls && filters.length && projects.length) {
  controls.hidden = false;
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      let count = 0;
      projects.forEach((project) => {
        const visible = category === 'all' || project.dataset.category === category;
        project.hidden = !visible;
        if (visible) count += 1;
      });
      filters.forEach((filter) => {
        const selected = filter === button;
        filter.classList.toggle('active', selected);
        filter.setAttribute('aria-pressed', String(selected));
      });
      if (result) result.textContent = `${count} ${count === 1 ? 'projeto' : 'projetos'}`;
    });
  });
}

document.querySelectorAll('.kwitch-screen img').forEach((image) => {
  const showFallback = () => {
    image.hidden = true;
    const fallback = image.parentElement.querySelector('.project-image-fallback');
    if (fallback) fallback.hidden = false;
  };
  image.addEventListener('error', showFallback);
  if (image.complete && image.naturalWidth === 0) showFallback();
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
