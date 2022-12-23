// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

function images(qwe) {
  return qwe
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </div >
    `;
    })
    .join('');
}

const card = images(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', card);

const img = document.querySelectorAll('.gallery__image');
img.forEach(e => {
  e.style = 'display:block';
});
// ===Запрещаем действия по умолчанию(например: скачивание)
function blockStandartAction(event) {
  event.preventDefault();
}

refs.gallery.addEventListener('click', selectImage);

function selectImage(event) {
  // ===Запрещаем действия по умолчанию(например: скачивание)
  blockStandartAction(event);
  // ===Проверяем что кликаем на картинку, если нет ретерн
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  // ===Открываем с помощью библиотеки
  const lightbox = new SimpleLightbox('.gallery a', {
    /* options */
  });
  lightbox.show();
  // ===Закрываем
  refs.gallery.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}