// use the date object
const today = new Date();



currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span> `;

//last modified 

let lastmodified = new Date(document.lastModified);
document.getElementById('lastmodified').textContent = lastmodified.toLocaleString();

//scripts to generate the windchill with static data 

let temperature = 15; // Temperature in °C
let windSpeed = 6;  // speed in km/h
let conditions = "Partly Cloudy"; // climate conditions

// function
function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// scripts to show the information in the Html document
document.getElementById("temperature").textContent = `${temperature} °C`;
document.getElementById("conditions").textContent = conditions;
document.getElementById("wind").textContent = `${windSpeed} km/h`;

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("wind-chill").textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    document.getElementById("wind-chill").textContent = "N/A";
}
