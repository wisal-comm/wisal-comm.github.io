// script.js
function openModal() {
  document.getElementById('donation-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('donation-modal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function (event) {
  const modal = document.getElementById('donation-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
