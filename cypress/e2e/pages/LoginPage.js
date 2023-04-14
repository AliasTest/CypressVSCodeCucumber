const userNameInput = 'input[name="userName"]'


class LoginPage {

  typeUserName(username) {    
    cy.get(userNameInput).click();
    cy.get(userNameInput).clear();
    cy.get(userNameInput).type(username)
    return this;
  }
}

export default LoginPage