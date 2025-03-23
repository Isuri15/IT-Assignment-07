console.log("Js-Que-2.js file is loaded...");

let boxes = new Array(6);
for (let i = 0; i < 6; i++) {
  boxes[i] = document.getElementById("box-" + (i + 1));
}

let colors = ["red","green","blue","yellow","darksalmon","plum",];

let currentColor = 0;
let intervalId = null;

function changeColor() {
  currentColor = (currentColor + colors.length - 1) % colors.length; // Move backward in the color array
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[(currentColor + i) % colors.length];
  }
}

function startAnimation() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
}

function stopAnimation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

  document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", startAnimation);
  document.getElementById("stop-btn").addEventListener("click", stopAnimation);
});