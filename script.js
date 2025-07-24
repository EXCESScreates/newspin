// script.js
const prizes = [
  "10% OFF (on your next order)",
  "FREE (surprise gift)",
  "20% OFF (on your next order)",
  "You WON ₹10 cashback",
  "Buy One, Get One",
  "15% OFF (on your next order)",
  "You WON ₹12 cashback",
  "Free Gifts (on your next order)"
];

const wheel = new Winwheel({
  numSegments: prizes.length,
  outerRadius: 200,
  segments: prizes.map(p => ({ fillStyle: getRandomColor(), text: p })),
  animation: {
    type: "spinToStop",
    duration: 5,
    spins: 8,
    callbackFinished: showResult
  }
});

let isSpinning = false; // Flag to track animation state

function getRandomColor() {
  const colors = ["#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457"];
  return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("spinBtn").addEventListener("click", () => {
  if (!isSpinning) { // Check if the wheel is already spinning
    isSpinning = true; // Set the flag to true
    wheel.startAnimation();
    document.getElementById("result").innerText = "";
    const spinSound = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3");
    spinSound.play();
  }
});

function showResult(indicatedSegment) {
  document.getElementById("result").innerText = `🎉 ${indicatedSegment.text} 🎉`;
  confetti();
  isSpinning = false; // Reset the flag when the animation is complete
}
