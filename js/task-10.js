

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.AmountSource = input;
createBtn.addEventListener('click', createBoxesEventHandler);
destroyBtn.addEventListener('click', destroyBoxesEventHandler);

boxes.clear = function(){
  for (const box of this.querySelectorAll('div')) {
    box.remove();
  }
}

function destroyBoxesEventHandler(){
  boxes.clear();
}

function createBoxesEventHandler(event) {
  boxes.clear();
  boxes.append(...generateBoxes(event.currentTarget.AmountSource.value));
  return;
}


function generateBoxes(amount){
  const array = [];
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    console.log(i);
    const element = document.createElement('div');
    element.setAttribute('style', `background-color: ${getRandomHexColor()}; height: ${30+10*i}px; width: ${30+10*i}px`);
    array.push(element);
  }
  return array;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
