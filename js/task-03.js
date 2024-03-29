const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const listEl = document.querySelector(".gallery");
// for (const { url, alt } of images) {
//   listEl.insertAdjacentHTML("beforeend", `<li class="gal-image"><img  src ="${url}" alt="${alt}":/></li>`);
 
// }
// console.log(listEl);
const listEl = document.querySelector('.gallery');
pushGalleryItems(listEl, generateLis(images));


function pushGalleryItems (gallery, htmlBlock) {
  gallery.setAttribute('style', "display: flex; list-style-type: none;margin:auto; alighn-item:center;");
  gallery.insertAdjacentHTML('beforeend', htmlBlock);
  return;
}

function generateLis(images){
  let lineHtml = "";
  for (const image of images) {
    lineHtml += `<li class= "gallery__item"> <img src="${image.url}" alt= "${image.alt}" width="200px"/></li>`;
  }
  return lineHtml;
}