const noBtn = document.getElementById('noBtn');

// Function to move the button
function moveButton() {
    // Calculate random position
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed'; // Allows it to fly anywhere
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Event 1: Mouse Hover (Desktop)
noBtn.addEventListener('mouseover', moveButton);

// Event 2: Touch (Mobile) - prevents them from tapping it!
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the actual "click"
    moveButton();
});

// Event 3: Click (Just in case they manage to click it)
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
});