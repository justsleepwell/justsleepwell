// --- Hidden developer logs / ARG hints ---
console.log("<!-- sleep debt unresolved -->");
console.log("<!-- remaining awake has been noted -->");
console.log("<!-- some states are archived -->");

// --- Get main elements ---
const status = document.getElementById("status");
const main = document.querySelector("main");

// --- Track user visits with LocalStorage ---
let visits = parseInt(localStorage.getItem('visits') || "0");
visits++;
localStorage.setItem('visits', visits);

// --- Get current hour ---
const now = new Date();
const hour = now.getHours();

// --- Define base message ---
let message = "Rest optimization available.";

// --- Modify message based on time ---
if (hour >= 23 || hour < 5) {
  message = "You should be asleep.";
} else if (hour >= 20) {
  message = "Preparing rest cycle…";
}

// --- Modify message based on number of visits (LocalStorage) ---
if (visits >= 3 && (hour >= 23 || hour < 5)) {
  message = "You’ve been here too long.";
}

// --- Content Degradation (vanishing letters) ---
function degradeText(text, visitsCount) {
  // slowly remove letters as visits increase
  let charsToRemove = Math.min(visitsCount, text.length - 1);
  let start = Math.floor(charsToRemove / 2);
  let end = start + charsToRemove;
  let degraded = text.substring(0, start) + "...".substring(0, charsToRemove) + text.substring(end);
  return degraded;
}

// Apply degradation only after 2 visits
if (visits >= 2) {
  message = degradeText(message, visits);
}

// --- Update the status element ---
status.textContent = message;

// --- Optional: subtle fade-in ---
if (main) {
  main.style.opacity = 0;
  main.style.transition = "opacity 2s ease-in-out";
  setTimeout(() => {
    main.style.opacity = 0.9;
  }, 100);
}

// --- Optional: background gradient changes ---
document.body.style.background =
  (hour >= 23 || hour < 5) ? "linear-gradient(#0b0b0d, #1a1a20)" :
  (hour >= 20) ? "linear-gradient(#101018, #1a1a20)" :
  "linear-gradient(#0e0e11, #121218)";
document.body.style.transition = "background 3s ease-in-out";

// --- Debug console log ---
console.log(`Visit #${visits} at ${hour}:${now.getMinutes().toString().padStart(2,"0")}`);
