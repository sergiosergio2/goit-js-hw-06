const input = document.querySelector('#validation-input');
input.addEventListener('blur', onCheckLength);

function onCheckLength() {
  ensureNoValidation(input);
  if (input.value.length !== +input.dataset.length) {
    invalid(input);
    return;
  }
    valid(input);
}

function invalid(input){
  input.classList.add('invalid');
  return;    
}
function valid(input){
  input.classList.add('valid');
  return;
}
function ensureNoValidation(input){
  if(input.classList.contains('invalid', 'valid'))
    input.classList.remove('invalid');
    input.classList.remove('valid');
  
}