
// responsive menu 

const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector('#hamburguer-menu');

// Add a click event listener to the hamburger button a

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


// hero section

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hero-image");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}


//tours section 

const tours = document.querySelector('.tours-container');

const card = document.createElement("div");

card.classList.add("tour-card");

tours.appendChild(card);

card.classList.add("card-container")


const imgClass = document.createElement("div");

imgClass.classList.add("img");

card.appendChild(imgClass);

const img1 = document.createElement("img");

img1.src = "images/tours-1.jpg";
img1.alt = "cusco-tours";
img1.loading = "lazy";

imgClass.appendChild(img1);

const cardContent = document.createElement("div");

cardContent.classList.add("card-content");

card.appendChild(cardContent);

const cardTittle = document.createElement("h2");
cardTittle.classList.add("tittle");

cardContent.appendChild(cardTittle);

cardTittle.textContent = "Find the Best Tours";

const cardParagraph = document.createElement("p");

cardParagraph.classList.add("description");

cardContent.appendChild(cardParagraph);

cardParagraph.textContent = "This is the place where Culture, History and Adventure meet";


const Link = document.createElement("a");

cardContent.appendChild(Link);

Link.href = "#";

Link.textContent = "Read More";



// Testimonials Section 




