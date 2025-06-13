/*---------------- Day Trips Section -----------------  */


const dayTrips = [
    {
        id: "sv",
        name: "Sacred Valley",
        imageURL: "images/dayTrips1.jpg",
        Duration: "12 hours",
        Price: "150 USD",
        Description: "In this tour, you will visit Machu Picchu and its surroundings, a mix of culture, nature and archeology  "


    },

    {
        id: "sv",
        name: "Cusco City tour",
        imageURL: "images/dayTrips2.jpg",
        Duration: "5 hours",
        Price: "25 USD",
        Description: "Discover all that Cusco has to offer in one tour! Visit the main squares, museums, churches and the most important archeological sites of the city "


    },

    {
        id: "sv",
        name: "Lunch with Traditional Music",
        imageURL: "images/dayTrips3.jpg",
        Duration: "3 hours",
        Price: "70 USD",
        Description: "Have lunch at one of the best local restaurants of the city, and you will know why peruvian food is so well known "


    },

    {
        id: "sv",
        name: "Pisac Tour",
        imageURL: "images/dayTrips4.jpg",
        Duration: "6 hours",
        Price: "50 USD",
        Description: "Discover the richness of the Sacred Valley by taking a tour to the Pisac Ruins "


    },



];

function showTrips(dayTrip) {

    const tripsWrapper = document.querySelector(".day-trips");

    const tripContainer = document.createElement("div");


    tripContainer.classList.add("trip-container");

    tripsWrapper.appendChild(tripContainer);


    const imageContainer = document.createElement("div");
    imageContainer.classList.add("trip-image-container");


    const tripCard =
        `
        <div class="trip-container">
            <div class="trip-image-container">
                <img src="${dayTrip.imageURL}" alt="${dayTrip.name}" loading="lazy">
                    <p> <strong><span>${dayTrip.name} </strong> </span></p>
                    <p>${dayTrip.Description}</p>
            </div>
        </div>

    `
        ;


    tripContainer.innerHTML = tripCard;
    imageContainer.innerHTML += tripCard;



};


dayTrips.forEach(showTrips);


