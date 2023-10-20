const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login/');

  // Login
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', 'your_username');
  await page.type('input[name="password"]', 'your_password');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Get cookies
  const cookies = await page.cookies();
  console.log('Cookies:', cookies);

  await browser.close();
})();

1. Testcase 1: Verify if user is redirected to the login page.
expect(page.url()).toBe('https://www.instagram.com/accounts/login/');

2. Testcase 2: Verify if the username field is present.
expect(await page.$('input[name="username"]')).not.toBeNull();

3. Testcase 3: Verify if the password field is present.
expect(await page.$('input[name="password"]')).not.toBeNull();

4. Testcase 4: Verify if the submit button is present.
expect(await page.$('button[type="submit"]')).not.toBeNull();

5. Testcase 5: Verify if user can login successfully.
await page.type('input[name="username"]', 'your_username');
await page.type('input[name="password"]', 'your_password');
await page.click('button[type="submit"]');
await page.waitForNavigation();
expect(page.url()).not.toBe('https://www.instagram.com/accounts/login/');

6. Testcase 6: Verify if the cookies are retrieved successfully.
const cookies = await page.cookies();
expect(cookies).not.toBeNull();