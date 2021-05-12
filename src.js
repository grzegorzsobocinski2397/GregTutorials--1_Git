const flowerButton = document.querySelector(".flower__button");
const waterTimer = document.querySelector(".flower__timer");
const imageElement = document.querySelector(".flower__image");
const flowerDescription = document.querySelector(".flower__description");
let currentTime = 50;

document.addEventListener("DOMContentLoaded", init);

function init() {
  flowerButton.addEventListener("click", waterPlant);
  setWaterInterval();
}

function setWaterInterval() {
  setInterval(() => validateFlowerWaterLevel(), 1000);
}

function validateFlowerWaterLevel() {
  if (currentTime > 0) {
    currentTime -= 1;
    waterTimer.innerHTML = currentTime;
  } else {
    imageElement.src = "./assets/dead-flower.jpg";
    flowerButton.remove();
    flowerDescription.innerHTML = "Your plant is dead."
  }
}

function waterPlant() {
  currentTime = 50;
  waterTimer.innerHTML = currentTime;
}
