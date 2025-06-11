
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


// configuring tours section for both mobile and desktop version

const toursSectionQuery = window.matchMedia("(max-width: 576px)");

function toursSectionView(e) {

    if (e.matches) {

        const tours = document.querySelector('.tours-container');

        tours.innerHTML = "";  // reseting value of tours

        const card = document.createElement("div");

        card.classList.add("tour-card");

        tours.appendChild(card);

        card.classList.add("card-container")


        const imgClass = document.createElement("div");

        imgClass.classList.add("img");

        card.appendChild(imgClass);

        // adding first image

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

    }
    // funtion for desktop view 
    else {

        const tours = document.querySelector('.tours-container');

        tours.innerHTML = "";  // reseting value of tours

        const card = document.createElement("div");

        card.classList.add("tour-card");

        tours.appendChild(card);

        card.classList.add("card-container")


        const imgClass = document.createElement("div");

        imgClass.classList.add("img");

        card.appendChild(imgClass);

        // adding first image

        const img1 = document.createElement("img");

        img1.src = "images/tours-1.jpg";
        img1.alt = "cusco-tours";
        img1.loading = "lazy";

        imgClass.appendChild(img1);


        // adding second image

        const img2 = document.createElement("img");

        img2.src = "images/tours-2.jpg";
        img2.alt = "cusco-tours";
        img2.loading = "lazy";

        imgClass.appendChild(img2);


        // adding third image 


        const img3 = document.createElement("img");

        img3.src = "images/tours-3.jpg";
        img3.alt = "cusco-tours";
        img3.loading = "lazy";

        imgClass.appendChild(img3);




    }


}


toursSectionQuery.addListener(toursSectionView);
toursSectionView(toursSectionQuery);





// Testimonials Section 

const clients = [
    {
        clientName: "John Doe",
        imageURL: "images/client-1.jpg",
        testimonial: " I can fully recommend these tours. I booked last year and I had an incredible time!",
        title: "Photographer"
    },
    {
        clientName: "Susan James",
        imageURL: "images/client-2.jpg",
        testimonial: "The Inca Trail was an amazing experience! Thank you very much!",
        title: "Travel Agent"
    },
    {
        clientName: "Carla Perez",
        imageURL: "images/client-3.jpg",
        testimonial: " I booked Cuzco City Tour and both the guide and the driver where awesome",
        title: "Entrepreneur"
    }
]


function ReviewCards(client) {

    const testimonials = document.querySelector('.testimonials');

    const reviewContainer = document.createElement("div");


    reviewContainer.classList.add("testimonials-container");


    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");




    const cardClient =

        `
        <div class="testimonials-container">
            <div class="image-container">
            <img src="${client.imageURL}" alt="${client.clientName}" loading="lazy">
                <p> <span>${client.clientName} </span><strong> ${client.title} </strong></p>
                <p>${client.testimonial}</p>
            </div>    
        </div>

        `


        ;

    reviewContainer.innerHTML = cardClient;
    testimonials.appendChild(reviewContainer);

    imageContainer.innerHTML += cardClient;

}

clients.forEach(ReviewCards)


