const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

pushToElement("#ingredients", generateElements(ingredients))


function generateElements(ingredients) {
  const newLis = [];
  for(let ing of ingredients) {
    let newLi = document.createElement("li");
    newLi.textContent = ing;
    newLi.classList.add("item");
    newLis.push(newLi);
  }
  return newLis;
}

function pushToElement(element, array) {
  const list = document.querySelector(element);
  list.append(...array);
  
}