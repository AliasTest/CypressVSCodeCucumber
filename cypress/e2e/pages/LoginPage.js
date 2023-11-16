import * as commandFunctions from '../../support/commands';
const EMAILUSERNAME = 'input[id="username-input"]'
const BUTTONCONTINUE = 'button[id="login-btn"]'
const PASSWORD = 'input[id="password"]'
const BTN_LOGIN ='[id="signinbutton"]'
const PAGE_SPINNER = '[id="civispinnerdiv"]'
const PAGE_LOADER ='[class="bx--loading__stroke"]'


class LoginPage {

  typeUserName(inputText) { 
    commandFunctions.sendTextToInputElement(inputText, EMAILUSERNAME)
    return this;
  }

  clickContinueButton() { 
    cy.pause();
    commandFunctions.clickElement(BUTTONCONTINUE);
    return this;
  }

  typePassword(inputText) { 
    commandFunctions.sendTextToInputElement(inputText, PASSWORD)
    return this;
  }
  clickLoginButton() { 
    commandFunctions.clickElement(BTN_LOGIN)
    return this;
  }
}

export default LoginPage;