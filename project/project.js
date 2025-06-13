
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



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hero-image");

    if (slides.length === 0) {
        console.log("There are no slides in this page.");
        return;  // it exits function when no slides are found
    }


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
        if (!tours) {
            console.log("There are no tours in this page.");
            return;  // it exits function when tours is not found
        }

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

        cardParagraph.textContent = "Choose your day trips, book an Inca Trail experience, or a Private Tour";


        const Link = document.createElement("a");

        cardContent.appendChild(Link);

        Link.href = "our-trips.html";

        Link.textContent = "Read More";

    }
    // funtion for desktop view 
    else {

        const tours = document.querySelector('.tours-container');



        if (!tours) {
            console.log("There are no tours in this page.");
            return;  // it exits function when tours is not found
        }

        tours.innerHTML = "";  // reseting value of tours

        const card = document.createElement("div");

        card.classList.add("tour-card");

        tours.appendChild(card);

        card.classList.add("card-container")

        // creating separate div structures for each img and its title

        const imgWrapper1 = document.createElement("div");

        imgWrapper1.classList.add("img");

        card.appendChild(imgWrapper1);

        const imgWrapper2 = document.createElement("div");
        imgWrapper2.classList.add("img");

        card.appendChild(imgWrapper2);

        const imgWrapper3 = document.createElement("div");
        imgWrapper3.classList.add("img");

        card.appendChild(imgWrapper3);


        // adding the first image

        const img1 = document.createElement("img");

        img1.src = "images/tours-1.jpg";
        img1.alt = "cusco-tours";
        img1.loading = "lazy";

        imgWrapper1.appendChild(img1);


        const img1Ref = document.createElement("a"); //creating a title with anchor Tag for the image
        imgWrapper1.appendChild(img1Ref);


        img1Ref.href = "day-trips.html";

        img1Ref.textContent = "Day Trips";



        // adding a second image

        const img2 = document.createElement("img");

        img2.src = "images/tours-2.jpg";
        img2.alt = "cusco-tours";
        img2.loading = "lazy";

        imgWrapper2.appendChild(img2);


        const img2Ref = document.createElement("a");
        imgWrapper2.appendChild(img2Ref);


        img2Ref.href = "inca-trail.html";

        img2Ref.textContent = "Inca Trail";


        // adding the  third image 


        const img3 = document.createElement("img");

        img3.src = "images/tours-3.jpg";
        img3.alt = "cusco-tours";
        img3.loading = "lazy";

        imgWrapper3.appendChild(img3);


        const img3Ref = document.createElement("a");
        imgWrapper3.appendChild(img3Ref);


        img3Ref.href = "private-tours.html";

        img3Ref.textContent = "Private Tours";





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
        testimonial: " I booked the Cusco City Tour, and both the guide and the driver were awesome",
        title: "Entrepreneur"
    }
]


function ReviewCards(client) {

    const testimonials = document.querySelector('.testimonials');

    if (!testimonials) {
        console.log("There are no testimonials in this page.");
        return;  // it exits function when testimonials is not found
    }

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

// populating select with tours for webform

/* Product Array List */

const tripOptions = [
    {
        id: "dt",
        name: "Day Trips"

    },
    {
        id: "it",
        name: "Inca Trail"

    },
    {
        id: "pt",
        name: "Private Tours"

    }
];

const select = document.querySelector(".tour-name");

/*  function to populate the select tag */




tripOptions.forEach(tripOption => {
    const option = document.createElement("option");
    option.value = tripOption.id;
    option.textContent = tripOption.name;
    select.appendChild(option);

});


/* function for local storage  */


let visits = 'visitsNumber';

if (localStorage.getItem(visits) === null) {
    // if there are no page visits set to 0
    localStorage.setItem(visits, '0');
}

// Recover current visits number
let visitsNumber = parseInt(localStorage.getItem(visits));

// Adding counter after visits
visitsNumber++;

// Storing Visits Number
localStorage.setItem(visits, visitsNumber.toString());

console.log(`Number of Visits: ${visitsNumber}`);


