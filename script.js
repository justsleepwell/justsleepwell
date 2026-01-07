const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();

document.body.insertAdjacentHTML(
  "beforeend",
  `<p style="position:fixed;bottom:10px;opacity:0.4;font-size:12px;">
     Local time detected: ${hour}:${minute.toString().padStart(2,"0")}
   </p>`
);
