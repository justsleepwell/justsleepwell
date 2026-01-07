// Get the status element
const status = document.getElementById("status");

// Get current local hour
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes(); // optional, for debugging or future use

// Default message and styling
status.textContent = "Rest optimization available.";
document.body.style.background = "linear-gradient(#0e0e11, #121218)"; // default dark gradient

// Time-based behavior
if (hour >= 23 || hour < 5) {
  status.textContent = "You should be asleep.";
  document.body.style.background = "linear-gradient(#0b0b0d, #1a1a20)"; // darker at night
  document.body.style.transition = "background 3s ease-in-out"; // smooth change
} else if (hour >= 20) {
  status.textContent = "Preparing rest cycle…";
  document.body.style.background = "linear-gradient(#101018, #1a1a20)"; // evening tone
  document.body.style.transition = "background 3s ease-in-out";
} 

// Optional: subtle fade-in for main content
const main = document.querySelector("main");
if (main) {
  main.style.opacity = 0;
  main.style.transition = "opacity 2s ease-in-out";
  setTimeout(() => {
    main.style.opacity = 0.9; // final opacity
  }, 100);
}

// Optional: add a hidden debug line showing current time (remove later)
console.log(`Local time detected: ${hour}:${minute.toString().padStart(2,"0")}`);
