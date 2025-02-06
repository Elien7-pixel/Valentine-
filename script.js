document.getElementById('yesBtn').addEventListener('click', function() {

    alert("You've made me the happiest short person alive! ❤️");

    showerRoses();

    document.getElementById('roseDisplay').innerHTML = "🌹🌹🌹 Thank you! Here are some roses for my Precious! 🌹🌹🌹";

    sendNotification("She said YES!");

});

document.getElementById('noBtn').addEventListener('click', function() {

    let confirmResponse = confirm("Wrong Answer 😭");

    if (confirmResponse) {

        alert("Try Again");

        sendNotification("She said NO...");

    }
function showerRoses() {
    const roseDisplay = document.getElementById('roseDisplay');
    for (let i = 0; i < 50; i++) { // Number of roses to shower
        const rose = document.createElement('span');
        rose.innerHTML = '🌹';
        rose.style.position = 'absolute';
        rose.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        rose.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        rose.style.fontSize = Math.random() * 2 + 1 + 'em'; // Random size
        rose.style.opacity = 1; // Start fully visible
        rose.style.transition = 'opacity 2s, transform 2s'; // Transition for opacity and movement
        roseDisplay.appendChild(rose);

        // Animate the rose falling
        setTimeout(() => {
            rose.style.transform = 'translateY(100vh)'; // Move down
            rose.style.opacity = 0; // Fade out
        }, 100); // Delay before starting the animation

        // Remove the rose after animation
        setTimeout(() => {
            rose.remove();
        }, 3000); // Time to remove the rose after it falls
    }
}
});

function sendNotification(message) {

    // Use a service like EmailJS or Twilio to send yourself a notification

    console.log(message); // Replace this with actual notification code

}
