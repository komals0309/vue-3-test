import { test, expect } from '@playwright/test';

test.describe('Login and Signup Page', () => {
  // 1
  test('should render the login page correctly', async ({ page }) => {
    await page.goto('http://localhost:8000/login');
    const emailInput = page.locator('input#email');
    const passwordInput = page.locator('input#password');
    const submitButton = page.locator('button[type="submit"]');
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toHaveText('Login');
  });

  // 2
  test('should toggle between login and signup modes', async ({ page }) => {
    await page.goto('http://localhost:8000/login');

    const signUpLink = page.locator('span.link');
    await signUpLink.click();
    await expect(page.locator('button[type="submit"]')).toHaveText('Sign Up');
    await signUpLink.click();
    await expect(page.locator('button[type="submit"]')).toHaveText('Login');
  });
  // 3
  test('should log in successfully with valid credentials', async ({ page }) => {
    await page.goto('http://localhost:8000/login'); 

    const emailInput = page.locator('input#email');
    const passwordInput = page.locator('input#password');
    const submitButton = page.locator('button[type="submit"]');
    
    await emailInput.fill('komals0309@gmail.com');
    await passwordInput.fill('rajneta54');
    
    await submitButton.click();

    await expect(page).toHaveURL('http://localhost:8000/feed'); 
  });
// 4
  test('should show error for invalid login credentials', async ({ page }) => {
    await page.goto('http://localhost:8000/login'); 

    const emailInput = page.locator('input#email');
    const passwordInput = page.locator('input#password');
    const submitButton = page.locator('button[type="submit"]');
    const errorMessage = page.locator('.error-message');
    
    await emailInput.fill('wronguser@example.com');
    await passwordInput.fill('wrongpassword');
    
    await submitButton.click();
    
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Enter valid email/ password');
  });
// 5
  test('should sign up a new user successfully', async ({ page }) => {
    await page.goto('http://localhost:8000/login'); 

    const signUpLink = page.locator('span.link');
    const emailInput = page.locator('input#email');
    const passwordInput = page.locator('input#password');
    const submitButton = page.locator('button[type="submit"]');

    await signUpLink.click();
    
    await emailInput.fill('newuser@example.com');
    await passwordInput.fill('newpassword');
    
    await submitButton.click();
    await expect(page).toHaveURL('http://localhost:8000/login');
  });
// 6
  test('should show error for failed signup', async ({ page }) => {
    await page.goto('http://localhost:8000/login');

    const signUpLink = page.locator('span.link');
    const emailInput = page.locator('input#email');
    const passwordInput = page.locator('input#password');
    const submitButton = page.locator('button[type="submit"]');
    const errorMessage = page.locator('.error-message');

    await signUpLink.click();
    
    await emailInput.fill('newuser@example.com');
    await passwordInput.fill('pass'); 
    
    await submitButton.click();
    
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Firebase: Error (auth/email-already-in-use).');
  });

});
