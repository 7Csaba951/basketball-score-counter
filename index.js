// Home Section
let homeScoreBtnOne = document.getElementById("home-score-btn1");
let homeScoreBtnTwo = document.getElementById("home-score-btn2");
let homeScoreBtnThree = document.getElementById("home-score-btn3");
let homeScore = 0;
let homeStore = document.getElementById("home")

function increaseHomeScoreByOne() {
    homeScore += 1;
    homeStore.textContent = homeScore;
}

function increaseHomeScoreByTwo() {
    homeScore += 2;
    homeStore.textContent = homeScore;
}

function increaseHomeScoreByThree() {
    homeScore += 3;
    homeStore.textContent = homeScore;
}
// End Home Section

// Guest Section
let guestScoreBtnOne = document.getElementById("guest-score-btn1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn2");
let guestScoreBtnThree = document.getElementById("guest-score-btn3");

let guestScore = 0;
let guestStore = document.getElementById("guest");

function increaseGuestScoreByOne() {
    guestScore += 1;
    guestStore.textContent = guestScore;
}

function increaseGuestScoreByTwo() {
    guestScore += 2;
    guestStore.textContent = guestScore;
}

function increaseGuestScoreByThree() {
    guestScore += 3;
    guestStore.textContent = guestScore;
}
// End Guest Section