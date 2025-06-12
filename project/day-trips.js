/*---------------- Day Trips Section -----------------  */


const dayTrips = [
    {
        id: "sv",
        name: "Sacred Valley",
        imageURL: "images/dayTrips1.jpg",
        Duration: "12 hours",
        Price: "150 USD",
        Description: "In this tour you will know Machu Pichu and its sorroundings, a mix of culture, nature and archeology "


    },

    {
        id: "sv",
        name: "Cusco City tour",
        imageURL: "images/dayTrips2.jpg",
        Duration: "5 hours",
        Price: "25 USD",
        Description: "Discover all Cusco has to offer at one tour! Take a tour through the main squares, museums, churches and the most important arqueological points of the City "


    },

    {
        id: "sv",
        name: "Lunch with Traditional Music",
        imageURL: "images/dayTrips3.jpg",
        Duration: "3 hours",
        Price: "70 USD",
        Description: "Have lunch at one of the best local restaurants of the City and you will know why peruvian food is so well known "


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


