// Simple Login Validation
function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Example hardcoded login credentials (for demo purposes)
    if (username === "admin" && password === "12345") {
        window.location.href = "home.html";  // Redirect to home page on success
    } else {
        document.getElementById('error-msg').style.display = 'block';  // Show error message
    }
}

// Logout Functionality
function logout() {
    window.location.href = "login.html";  // Redirect to login page
}

// Contact Form Submission (basic demo, does nothing for now)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been sent. Thank you for contacting us!");
});
