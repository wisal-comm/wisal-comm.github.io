const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

let collectedAmount = 20000;
let targetAmount = 200000;
let progress = (collectedAmount / targetAmount) * 100;

progressBar.style.setProperty('--progress', `${progress}%`);
progressText.textContent = `${collectedAmount}EGP Collected`;

const donateButton = document.getElementById('donateButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

donateButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
