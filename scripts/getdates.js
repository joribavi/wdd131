
// select the DOM elements for output

const currentyear = document.querySelector("#currentyear");

// use the date object
const today = new Date();



currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span> `;

//last modified 

let lastmodified = new Date(document.lastModified);
document.getElementById('lastmodified').textContent = lastmodified.toLocaleString();
