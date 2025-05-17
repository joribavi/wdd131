// use the date object
const today = new Date();



currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span> `;

//last modified 

let lastmodified = new Date(document.lastModified);
document.getElementById('lastmodified').textContent = lastmodified.toLocaleString();


// responsive menu 

const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector('#hamburguer-menu');

// Add a click event listener to the hamburger button a

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});