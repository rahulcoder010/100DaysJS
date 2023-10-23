// day2.js

// Function to validate registration form
function validateRegistrationForm(form) {
    // Check if all fields are filled
    if (form.firstName === "" || form.lastName === "" || form.email === "" || form.password === "") {
        return "All fields are required";
    }
    
    // Check if password meets minimum length requirement
    if (form.password.length < 6) {
        return "Password must be at least 6 characters long";
    }
    
    // Check if password and confirm password fields match
    if (form.password !== form.confirmPassword) {
        return "Passwords do not match";
    }
    
    // Check if email is valid
    if (!isValidEmail(form.email)) {
        return "Invalid email";
    }
    
    // If all validations pass, return success message
    return "Registration successful!";
}

// Function to validate email
function isValidEmail(email) {
    // Regular expression to check email format
    var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;:\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    return re.test(email);
}


```