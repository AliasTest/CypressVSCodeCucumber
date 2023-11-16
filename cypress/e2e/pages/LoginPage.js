const userNameInput = 'input[id="username-input"]'


class LoginPage {

  typeUserName1(username) {    
    cy.get(userNameInput).click();
    cy.get(userNameInput).clear();
    cy.get(userNameInput).type(username)
    return this;
  }
}

export default LoginPage;