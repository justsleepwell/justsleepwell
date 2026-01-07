// --- Hidden ARG logs ---
console.log("<!-- sleep debt unresolved -->");
console.log("<!-- remaining awake has been noted -->");
console.log("<!-- some states are archived -->");

// --- Elements ---
const status = document.getElementById("status");
const main = document.querySelector("main");

// --- Visit tracking ---
let visits = parseInt(localStorage.getItem('visits') || "0");
visits++;
localStorage.setItem('visits', visits);

// --- Random degradation threshold (1–6) ---
let degradeThreshold = localStorage.getItem('degradeThreshold');
if (!degradeThreshold) {
  degradeThreshold = Math.floor(Math.random() * 6) + 1;
  localStorage.setItem('degradeThreshold', degradeThreshold);
}

// --- Get current hour ---
const now = new Date();
let hour = now.getHours();
const minute = now.getMinutes(); // optional for debugging

// --- TEST MODE: Simulate hour via URL ?hour=X ---
const testHour = parseInt(new URLSearchParams(window.location.search).get("hour"));
if (!isNaN(testHour) && testHour >= 0 && testHour <= 23) {
  console.log(`Simulating hour: ${testHour}`);
  hour = testHour;
}

// --- Base message by hour ---
let message = "Rest optimization available.";
if (hour >= 23 || hour < 5) {
  message = "You should be asleep.";
} else if (hour >= 20) {
  message = "Preparing rest cycle…";
}

// --- Visit-based override ---
if (visits >= 3 && (hour >= 23 || hour < 5)) {
  message = "You’ve been here too long.";
}

// --- Content degradation ---
function degradeText(text, visitsCount) {
  let charsToRemove = Math.min(visitsCount, text.length - 1);
  let start = Math.floor(charsToRemove / 2);
  let end = start + charsToRemove;
  let degraded = text.substring(0, start) + "...".substring(0, charsToRemove) + text.substring(end);
  return degraded;
}

// --- Apply degradation if visits >= threshold ---
if (visits >= degradeThreshold) {
  message = degradeText(message, visits);
  document.body.classList.add('degraded');
}

// --- Night flicker effect ---
if (hour >= 23 || hour < 5) {
  document.body.classList.add('night');
}

// --- Update status ---
status.textContent = message;

// --- Fade-in effect ---
if (main) {
  main.style.opacity = 0;
  main.style.transition = "opacity 2s ease-in-out";
  setTimeout(() => { main.style.opacity = 0.9; }, 100);
}

// --- Background gradient by hour ---
document.body.style.background =
  (hour >= 23 || hour < 5) ? "linear-gradient(#0b0b0d, #1a1a20)" :
  (hour >= 20) ? "linear-gradient(#101018, #1a1a20)" :
  "linear-gradient(#0e0e11, #121218)";

// --- Debug console ---
console.log(`Visit #${visits} at ${hour}:${minute.toString().padStart(2,"0")}`);
console.log(`Degradation threshold for this user: ${degradeThreshold}`);
