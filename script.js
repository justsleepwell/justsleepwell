// Get the status element
const status = document.getElementById("status");

// Get current local hour
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes(); // optional for debugging

// Default message and styling
status.textContent = "Rest optimization available.";
document.body.style.background = "linear-gradient(#0e0e11, #121218)";

// Time-based behavior
if (hour >= 23 || hour < 5) {
  status.textContent = "You should be asleep.";
  document.body.style.background = "linear-gradient(#0b0b0d, #1a1a20)";
  document.body.style.transition = "background 3s ease-in-out";
} else if (hour >= 20) {
  status.textContent = "Preparing rest cycle…";
  document.body.style.background = "linear-gradient(#101018, #1a1a20)";
  document.body.style.transition = "background 3s ease-in-out";
} 

// Fade-in effect for main content
const main = document.querySelector("main");
if (main) {
  main.style.opacity = 0;
  main.style.transition = "opacity 2s ease-in-out";
  setTimeout(() => {
    main.style.opacity = 0.9;
  }, 100);
}

// Optional: log time to console for testing
console.log(`Local time detected: ${hour}:${minute.toString().padStart(2,"0")}`);
