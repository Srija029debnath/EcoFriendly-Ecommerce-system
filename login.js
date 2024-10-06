// Switching between login and signup forms
function showSignupForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Function to handle login
function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulating user validation
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        // Redirect to dashboard or homepage
    } else {
        alert("Invalid login credentials. Try again.");
    }
}

// Function to handle sign up
function signUpUser(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;

    // Basic validation before proceeding (you can add more validation here)
    if (name && email && phone && password) {
        alert("Sign up successful!");
        // Save user details to backend or localStorage
        showLoginForm();
    } else {
        alert("Please fill in all fields.");
    }
}

// Google Login Simulation (You would typically use Google's API here)
function loginWithGoogle() {
    alert("Google login clicked (actual Google login API can be integrated here).");
}
