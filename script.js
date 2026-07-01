const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeBtn = document.querySelector('.lightbox-close');

document.querySelectorAll('.menu-card img').forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox(){
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if(event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if(event.key === 'Escape') closeLightbox(); });
