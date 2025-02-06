document.getElementById('yesBtn').addEventListener('click', function() {
    // Show the thank you message
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.innerHTML = "Thank You, Here are some roses for my Precious!";
    thankYouMessage.style.display = "block"; // Show the thank you message
    showerRoses(); // Call the function to shower roses
});

document.getElementById('noBtn').addEventListener('click', function() {
    let confirmResponse = confirm("Are you sure? You might change your mind!");
    if (confirmResponse) {
        alert("I'll keep trying to win your heart. 💔");
    }
});

function showerRoses() {
    const roseDisplay = document.getElementById('roseDisplay');
    const duration = 30000; // 30 seconds
    const endTime = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > endTime) {
            clearInterval(interval); // Stop creating roses after 30 seconds
            return;
        }

        const rose = document.createElement('span');
        rose.innerHTML = '🌹';
        rose.style.position = 'absolute';
        rose.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        rose.style.top = '0'; // Start from the top of the screen
        rose.style.fontSize = Math.random() * 2 + 1 + 'em'; // Random size
        rose.style.opacity = 1; // Start fully
