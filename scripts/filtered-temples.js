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


// Temples Array for dynamically assigning temple images into HTML

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mendoza Argentina",
        location: "Mendoza, Argentina",
        dedicated: "2024, September, 22",
        area: 21999,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-53412.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4088.jpg"
    },
    {
        templeName: "Cordoba Argentina",
        location: "Cordoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11097.jpg"
    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6948.jpg"
    },
    {
        templeName: "Santiago Chile",
        location: "Santiago de Chile, Chile",
        dedicated: "1983, September, 15",
        area: 20831,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-45812.jpg"
    },

];

//looping the temples array



function TempleCards(temple) {

    const container = document.querySelector('.figure-container');



    const figure = document.createElement("figure");



    const cardHTML =

        ` <div class="figure-container">
            <figure >
                
                <figcaption> <h2>${temple.templeName}</h2> </figcaption>
                <p><strong>Location:</strong> ${temple.location}  </p>
                <p><strong>Date:</strong>${temple.dedicated} </p>
                <p><strong>Size:</strong> ${temple.area}</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"  />

            </figure>
        </div > `


        ;


    container.innerHTML += cardHTML;


}

temples.forEach(TempleCards)


// Event Listener to get temples older than 1900

const templesOld = document.getElementById("temples-old");

templesOld.addEventListener('click', () => {
    document.querySelector(".figure-container").innerHTML = "";

    const FilteredTemples = temples.filter(temple => {

        const dedicationYear = parseInt(temple.dedicated.substring(0, 4));
        return dedicationYear < 1900;


    });

    FilteredTemples.forEach(TempleCards);

});

// Event Listener to get temples newer than 2000

const templesNew = document.getElementById("temples-new");

templesNew.addEventListener('click', () => {
    document.querySelector(".figure-container").innerHTML = "";

    const FilteredTemples = temples.filter(temple => {

        const dedicationYear = parseInt(temple.dedicated.substring(0, 4));
        return dedicationYear > 2000;


    });

    FilteredTemples.forEach(TempleCards);

});


// Event Listener to get temples temples larger than 90,000 square feet


const templesLarge = document.getElementById("temples-large");

templesLarge.addEventListener('click', () => {
    document.querySelector(".figure-container").innerHTML = "";

    const FilteredTemples = temples.filter(temple => {

        const areaLarge = parseInt(temple.area);
        return areaLarge > 90000;


    });

    FilteredTemples.forEach(TempleCards);

});


// Event Listener to get temples temples smaller than 10000 square feet


const templesSmall = document.getElementById("temples-small");

templesSmall.addEventListener('click', () => {
    document.querySelector(".figure-container").innerHTML = "";

    const FilteredTemples = temples.filter(temple => {

        const areaSmall = parseInt(temple.area);
        return areaSmall < 10000;


    });

    FilteredTemples.forEach(TempleCards);

});


