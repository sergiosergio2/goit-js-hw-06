const input = document.querySelector('#validation-input');
input.addEventListener('blur', onCheckLength);
function onCheckLength() {
   
    if (input.value.length !== +input.dataset.length ) {
      return input.classList.add('invalid');
    }
    else{
       return input.classList.replace('invalid', 'valid');
    }
    
}

