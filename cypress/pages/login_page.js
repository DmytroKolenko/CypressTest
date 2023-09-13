export class LoginPage {

    loginPage_userName = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    navigate(url) {
        cy.visit(url)
    }

    enterUserName(userName) {
        cy.get(this.loginPage_userName).type(userName)
    }

    enterPassword(password) {
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}