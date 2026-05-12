function playSound() {
    const audio = new Audio("./assets/smash.mp3");
    audio.play();
}

$(window).on("mousemove", function (e) {
    // have the hammer follow the cursor
    // use "e.originalEvent.offsetX" and "e.originalEvent.offsetY" for mouse position
    // using this alone will put the element on the bottom right so u might need to + 100 or - 100
});

$(window).on("click", function (e) {
    // rotate the hammer and hit the mole
    // using setTimeout, rotate it back 100ms later
});

$(".hole").on("click", function (e) {
    const mole = $(this).find(".mole");
    const moleHit = $(this).find(".mole-hit");

    // Do nothing if no mole or already hit

    // play the hit sound

    // hide the mole, show the hit mole

    // 500ms later hide the hit mole
});

// add a function that every second randomly shows a mole from the list of moles

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerID);
    clearInterval(timerId);
    alert("GAME OVER!!!  " + result);
  }
}
let countDownTimerID = setInterval(countDown, 1000);

function refresh() {
  window.location.reload("Refresh");
}
