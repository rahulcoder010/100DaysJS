// This is a sample test case for Instagram login

it('should allow users to login with valid credentials', () => {
  // Code to simulate user input for login credentials
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  usernameInput.value = 'exampleUser123';
  passwordInput.value = 'password123';
  
  // Code to simulate a click on the login button
  const loginButton = document.getElementById('loginButton');
  loginButton.click();
  
  // Code to check if the user has successfully logged in
  const welcomeMessage = document.getElementById('welcomeMessage');
  expect(welcomeMessage.textContent).toBe('Welcome, exampleUser123!');
});

it('should show an error message for incorrect credentials', () => {
  // Code to simulate user input for login credentials
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  usernameInput.value = 'exampleUser123';
  passwordInput.value = 'wrongPassword';
  
  // Code to simulate a click on the login button
  const loginButton = document.getElementById('loginButton');
  loginButton.click();
  
  // Code to check if an error message is displayed
  const errorMessage = document.getElementById('errorMessage');
  expect(errorMessage.textContent).toBe('Incorrect username or password');
});

// Additional test cases can be added below