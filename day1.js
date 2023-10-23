// day1.js

function login(username, password) {
  if (username === 'admin' && password === 'password') {
    return 'Login successful!';
  } else {
    return 'Login failed.';
  }
}

// Write test cases here
// Test case 1
console.log(login('admin', 'password') === 'Login successful!');

// Test case 2
console.log(login('admin', 'wrongpassword') === 'Login failed.');

// Test case 3
console.log(login('wrongusername', 'password') === 'Login failed.');

// Test case 4
console.log(login('', '') === 'Login failed.');

// Test case 5
console.log(login('admin', '') === 'Login failed.');

// Test case 6
console.log(login('', 'password') === 'Login failed.');

// Test case 7
console.log(login('admin', 'PaSsWoRd') === 'Login failed.');

// Test case 8
console.log(login('Admin', 'password') === 'Login failed.');

// Test case 9
console.log(login('admin', 'password1') === 'Login failed.');

// Test case 10
console.log(login('username', 'password') === 'Login failed.');

// Test case 11
console.log(login('admin1', 'password') === 'Login failed.');

// Test case 12
console.log(login('admin', 'password123') === 'Login failed.');

// Test case 13
console.log(login('admin123', 'admin123') === 'Login failed.');

// Test case 14
console.log(login('username123', 'password123') === 'Login failed.');

// Test case 15
console.log(login('admin', 'password123!') === 'Login failed.');