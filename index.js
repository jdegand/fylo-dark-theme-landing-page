let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    let email = document.getElementById("email");
    let errorMessage = document.getElementById("error-message");

    if(email.validity.valueMissing){
        e.preventDefault();
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('display-block');
    }else if (email.validity.typeMismatch) {
        e.preventDefault();
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('display-block');
        email.value = '';
    } else {
        e.preventDefault();
        errorMessage.classList.remove('display-block');
        errorMessage.classList.add('hidden');
        email.value = '';
    }
})