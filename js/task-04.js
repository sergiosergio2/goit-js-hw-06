const buttonConteiner = document.querySelector('#counter');
const buttonDecrement = buttonConteiner.querySelector('[data-action="decrement"]');
const buttonIncrement = buttonConteiner.querySelector('[data-action="increment"]');
buttonDecrement.addEventListener('click', () => {
    const counterValue = buttonConteiner.querySelector('#value');
    return counterValue.textContent = Number(counterValue.textContent) - 1;
});
buttonIncrement.addEventListener('click', () => {
    const counterValue = buttonConteiner.querySelector('#value');
    return counterValue.textContent = Number(counterValue.textContent) + 1;
});