document.getElementById('yesBtn').addEventListener('click', function() {

    alert("You've made me the happiest short person alive! ❤️");

    document.getElementById('roseDisplay').innerHTML = "🌹🌹🌹 Thank you! Here are some roses for my Precious! 🌹🌹🌹";

    sendNotification("She said YES!");

});

document.getElementById('noBtn').addEventListener('click', function() {

    let confirmResponse = confirm("Wrong Answer 😭");

    if (confirmResponse) {

        alert("Try Again");

        sendNotification("She said NO...");

    }

});

function sendNotification(message) {

    // Use a service like EmailJS or Twilio to send yourself a notification

    console.log(message); // Replace this with actual notification code

}
