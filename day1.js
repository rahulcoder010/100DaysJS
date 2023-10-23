// day1.js

// function to check login
function login(username, password) {
  // code to check login credentials
  if (username === "admin" && password === "password") {
    return "Login successful";
  } else {
    return "Invalid credentials";
  }
}

module.exports = login;