// script.js
const progress = document.getElementById('progress');
const amountRaised = document.getElementById('amount-raised');
const targetAmount = document.getElementById('target-amount');

// Example data
let raised = 2500; // Amount raised so far
let target = 10000; // Target amount

// Update progress bar
function updateProgress() {
  const percentage = (raised / target) * 100;
  progress.style.width = `${percentage}%`;
  amountRaised.textContent = `$${raised}`;
  targetAmount.textContent = `$${target}`;
}

// Simulate dynamic updates (you can replace this with real data)
setInterval(() => {
  if (raised < target) {
    raised += 500; // Simulate donations coming in
    updateProgress();
  }
}, 2000); // Update every 2 seconds

// Initial update
updateProgress();
