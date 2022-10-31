//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click


const button = document.createElement('button');
button.innerText = 'button';
button.classList.add('btnToClick');
document.body.appendChild(button);
console.log(button);
//debugger
let clickFunction = (event) => {
    console.log(event);
    console.log(event.target.innterHTML);
};

button.addEventListener('click', clickFunction);

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusElement = document.querySelector('.focus');
focusElement.innerText = 'Focus element';
console.log(focusElement);

let focusFunction = (event) => {
    console.log(event);
    console.log(event.target.value);
};
focusElement.addEventListener('focus', focusFunction);

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputElement = document.querySelector('.value');
inputElement.innerText = 'Input Element';
console.log(inputElement);

let inputFunction = (event) => {
    console.log(event);
    console.log(event.target.value);
};
inputElement.addEventListener('input', inputFunction);