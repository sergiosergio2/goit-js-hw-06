const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit',onFormSubmit);
function onFormSubmit (event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert(`Заполните все поля формы!!!`);
        return;
    }

    console.log(email.value, password.value);
    formEl.reset();
}
