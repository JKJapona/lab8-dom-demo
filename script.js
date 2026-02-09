const title = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const emailInput = document.getElementById('emailInput');
const output = document.getElementById('output');

const description = document.querySelector('.description');
const button = document.querySelector('#btnClick');

button.addEventListener('click', () => {
    button.textContent = 'Clicked!';

    let name = nameInput.value;
    let age = ageInput.value;
    let email = emailInput.value;

    output.innerHTML = '<h2>Button Clicked!</h2>';

    if (age == 18) {
        output.innerHTML +=`<p>Welcome ${name}, you are now an adult! Loose`;
    } else {
        output.innerHTML += `<p>Welcome ${name}, you are ${age} years old.</p>`;
    }

    if (age === 18) {
        output.innerHTML +=`<p>Welcome ${name}, you are now an adult! Strict`;
    } else {
        output.innerHTML += `<p>Welcome ${name}, you are ${age} years old.</p>`;
    }

    if (name !== "" && age !== "" && email !== "") {
        output.innerHTML += `<p>Hi ${name}, I am ${age} years old and my email is ${email}.</p>`;
    } else {
        output.innerHTML += `Please fill in all fields.`
    }
})