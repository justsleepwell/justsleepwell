const status = document.getElementById("status");
const hour = new Date().getHours();

if (hour >= 23 || hour < 5) {
  status.textContent = "You should be asleep.";
} else if (hour >= 20) {
  status.textContent = "Preparing rest cycle…";
} else {
  status.textContent = "Rest optimization available.";
}
