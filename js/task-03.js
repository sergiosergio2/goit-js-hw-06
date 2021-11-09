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
function itemGallery (images) {
  const listEl = document.querySelector('.gallery');
  let lineHtml = "";
  for (const image of images) {
    lineHtml += `<li class= "gallery__item"> <img src="${image.url}" alt= "${image.alt}" width="450px"/></li>`;
    
  }
  listEl.setAttribute('style', "display: flex; list-style-type: none;");
  listEl.insertAdjacentHTML('beforeend', lineHtml);
}
itemGallery(images);
  