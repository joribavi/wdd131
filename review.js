let reviewsDisplay = document.querySelector("#reviews");

let reviewsCount = Number(window.localStorage.getItem('reviewsCount-ls')) || 0;

if (reviewsCount !== 0) {
    reviewsDisplay.textContent = reviewsCount;

} else {
    reviewsDisplay.textContent = '0';
}

reviewsCount++;

localStorage.setItem('reviewsCount-ls', reviewsCount);



