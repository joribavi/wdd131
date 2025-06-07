
// responsive menu 

const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector('#hamburguer-menu');

// Add a click event listener to the hamburger button a

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});