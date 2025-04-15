// Countdown Timer for Main Event
const countdownElement = document.getElementById('countdown');

function startCountdown() {
    const eventDate = new Date('2025-04-20T10:00:00');  // Change this to your event date and time
    const interval = setInterval(function() {
        const currentTime = new Date();
        const timeRemaining = eventDate - currentTime;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "The event has started!";
        } else {
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `Time left until the event: ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

startCountdown();

// Registration Form Validation
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for registering!");
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});
