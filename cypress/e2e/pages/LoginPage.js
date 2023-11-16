import * as commandFunctions from '../../support/commands';
const userNameInput = 'input[id="username-input"]'


class LoginPage {

  typeUserName(inputText) {    
    commandFunctions.sendTextToInputElement(inputText, userNameInput)
    return this;
  }
}

export default LoginPage;