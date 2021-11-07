const inputTxt = document.querySelector('#name-input');
inputTxt.addEventListener('input', onInputChange);
const outputTxt = document.querySelector('#name-output');
function onInputChange (event) {
    
   console.log(event.currentTarget.value);
    if(event.currentTarget.value === ""){
        outputTxt.textContent = "Anonymous";
    }else{
        outputTxt.textContent = event.currentTarget.value;
    }
    
    console.log( outputTxt.textContent);
}