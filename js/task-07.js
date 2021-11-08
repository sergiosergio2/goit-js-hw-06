const inputScrol = document.querySelector('#font-size-control');

const mutableText = document.querySelector('#text');
inputScrol.addEventListener('change', changesText);

function changesText () {
   
    mutableText.style.fontSize = Number(inputScrol.value) + "px";  
}