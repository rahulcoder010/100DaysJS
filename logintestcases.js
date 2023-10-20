// Example test case:
// Login with valid credentials
describe('Login with valid credentials', () => {
  it('Should login with valid credentials', () => {
    // Step 1: Go to Instagram login page
    browser.url('https://www.instagram.com/accounts/login/');

    // Step 2: Enter username and password
    const usernameInput = $('#username');
    const passwordInput = $('#password');
    const loginButton = $('button[type="submit"]');
    usernameInput.setValue('your_username');
    passwordInput.setValue('your_password');

    // Step 3: Submit login form
    loginButton.click();

    // Step 4: Verify successful login
    const profileHeader = $('[data-testid="headerProfileIcon"]');
    expect(profileHeader).toBeVisible();
  });
});


// Add your test cases below this comment

it('Should display an error message for invalid credentials', () => {
  browser.url('https://www.instagram.com/accounts/login/');
  const usernameInput = $('#username');
  const passwordInput = $('#password');
  const loginButton = $('button[type="submit"]');
  usernameInput.setValue('invalid_username');
  passwordInput.setValue('invalid_password');
  loginButton.click();
  const errorMessage = $('[data-testid="login-error"]');
  expect(errorMessage).toBeVisible();
});

it('Should display a validation error for empty username and password', () => {
  browser.url('https://www.instagram.com/accounts/login/');
  const loginButton = $('button[type="submit"]');
  loginButton.click();
  const errorMessages = $$('.error-message');
  expect(errorMessages).toBeElementsArrayOfSize(2);
});

it('Should navigate to the password reset page when "Forgot password?" link is clicked', () => {
  browser.url('https://www.instagram.com/accounts/login/');
  const forgotPasswordLink = $('a[href="/accounts/password/reset/"]');
  forgotPasswordLink.click();
  const resetPageTitle = browser.getTitle();
  expect(resetPageTitle).toContain('Reset Password');
});