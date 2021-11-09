function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


createBtn.AmountSource = input;
createBtn.addEventListener('click', createBoxes, input.value);
destroyBtn.addEventListener('click', removeBoxes);


function removeBoxes() {
  const allBoxes = document.querySelectorAll('#boxes div');
  for (const box of allBoxes) {
    box.remove();
  }
}
function createBoxes(event) {
  let amount = event.currentTarget.AmountSource.value;
  const array = [];
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    console.log(i);
    const element = document.createElement('div');
    element.setAttribute('style', `background-color: ${getRandomHexColor()}; height: ${30+10*i}px; width: ${30+10*i}px`);
    array.push(element);
  }
  console.log(array);
  removeBoxes();
  boxes.append(...array);
}

