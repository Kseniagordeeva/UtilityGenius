import { expect, Locator, Page } from "@playwright/test";
import { LoginData } from "../pagedata/PageData";

export class LoginPO {  
  readonly page: Page;
  readonly signInButton: Locator;
  readonly emailTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly loginButton: Locator;
  readonly appLogo:Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator("#top-menu > li:nth-child(5) a");
    this.emailTextBox = page.locator("input[name='email']");
    this.passwordTextBox = page.locator("input[name='password']");
    this.loginButton = page.locator("button[type='submit']");
    this.appLogo= page.locator("#logo");
  }
  /**
   * Enter username, password, and click on the login button
   */
  async enterLoginCredentialsAndClickOnLoginButton() {
    await this.signInButton.click();
    await this.emailTextBox.fill(LoginData.email);
    await this.passwordTextBox.fill(LoginData.password);
    await this.loginButton.click();
    await this.page.waitForTimeout(11000)
  }
  /**
   * Enter invalid login credentials and click on the login button
   */
  async enterInvalidLoginCredentialsAndClickOnLoginButton() {
    await this.signInButton.click();
    await this.emailTextBox.fill(LoginData.email);
    await this.passwordTextBox.fill(LoginData.invalidPassword);
    await this.loginButton.click();
    await this.page.waitForTimeout(4000)
  }

  /**
   * Get error message 
   * @returns  Error message
   */
  async getErrorMessage() {
   return await this.page.$eval(
      "div.auth0-global-message > span > span",
      (el) => el.textContent.trim()      
    );
  }
}