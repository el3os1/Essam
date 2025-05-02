window.addEventListener('DOMContentLoaded', () => {
    const countries = ["Egypt", "Lebanon", "Spain", "Italy", "Turkey", "Mexico", "France"];
    const emojis = {
      "Egypt": "🧆",
      "Lebanon": "🥙",
      "Spain": "🥘",
      "Italy": "🍕",
      "Turkey": "🥙",
      "Mexico": "🌮",
      "France": "🥐"
    };
  
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const emoji = emojis[randomCountry] || "🍽️";
    document.getElementById('suggestion').textContent =`😋Hungry? would you like to try some amazing food from ${randomCountry} today! ${emoji}`;
});
let loginLink = document.getElementById("log");
if (sessionStorage.getItem("loggedIn") === "true") {
  loginLink.style.display = "none";
}
loginLink.onclick = function () {
sessionStorage.setItem("loggedIn", "true");
};
const btn = document.getElementById("btn");
const para = document.getElementById("para");
btn.onclick = function () {
  para.classList.toggle("visible");
  btn.textContent = para.classList.contains("visible") ? "Show less" : "Show more";
};
