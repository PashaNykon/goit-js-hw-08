import throttle from 'lodash.throttle';

const formEL = document.querySelector('.feedback-form');

let arrayValues = {};
formEL.addEventListener('input', throttle(onFormInput, 500));
formEL.addEventListener('submit', onFormSubmit);

fillFromStorage();

function onFormInput(event) {
    arrayValues[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(arrayValues));
}

function fillFromStorage() {
    let storageValues = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (storageValues) {
        if (storageValues.email) {
            formEL.elements.email.value = storageValues.email;
        }
        if (storageValues.message) {
            formEL.elements.message.value = storageValues.message;
        }
    } 
}
  
function onFormSubmit(event) {
    event.preventDefault();
    console.log(arrayValues);
    event.currentTarget.reset();
    localStorage.clear();
}
