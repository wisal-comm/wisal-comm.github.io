function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Example function to update the progress bar dynamically
function updateProgress(percentage) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percentage + '%';
    progressBar.textContent = percentage + '%';
}

// Example: Update progress dynamically
updateProgress(20); // Change the number to set progress
