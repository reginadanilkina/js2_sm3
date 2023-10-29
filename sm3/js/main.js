const accordions = document.querySelectorAll('.accordion');

accordions.forEach(x => {
  x.addEventListener('click', function() {
    const el = x.lastElementChild;
    const header = x.firstElementChild.lastElementChild;
    el.classList.toggle('accordion-body_active');
    header.img.classList.toggle('img_active');
  })
})