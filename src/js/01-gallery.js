import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// import templateFunction from '../templates/item-markup.hbs';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
   new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  // ===Закрываем
  refs.gallery.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
