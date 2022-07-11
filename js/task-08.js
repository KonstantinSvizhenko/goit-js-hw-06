const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const userEmail = event.currentTarget.elements.email.value;
    const userPass = event.currentTarget.elements.password.value;
    const userData = {
        userEmail,
        userPass,
    }

    

    form.reset()

    if (userEmail === '' || userPass === '') {
        alert('Всі поля повинні бути заповнені')
    }
  
    console.log(userData);
}
