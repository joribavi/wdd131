let reviewsDisplay = document.querySelector("#reviews");

let reviewsCount = Number(window.localStorage.getItem('reviewsCount-ls')) || 0;

if (reviewsCount !== 0) {
    reviewsDisplay.textContent = reviewsCount;

} else {
    reviewsDisplay.textContent = '0';
}

reviewsCount++;

localStorage.setItem('reviewsCount-ls', reviewsCount);




/*
let reviewsCount = localStorage.getItem("reviewsCount");

if (!reviewsCount) {

    reviewsCount = 0;
}
else {
    reviewsCount = parseInt(reviewsCount, 10);
}

reviewsCount++;

localStorage.setItem("reviewsCount", reviewsCount.toString());

document.getElementById("reviews").textContent = reviewsCount; */