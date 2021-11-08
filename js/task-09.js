function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

function getBodyColor() {
body.setAttribute('style', `background-color: ${getRandomHexColor()}`);
color.textContent = getRandomHexColor();

}
button.addEventListener('click', getBodyColor);

