import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
document.getElementById('dark-theme-button').addEventListener('click', () => {
  document.documentElement.style.setProperty('--background-color', '#333')
})

document.getElementById('light-theme-button').addEventListener('click', () => {
  document.documentElement.style.setProperty('--background-color', 'white')
})