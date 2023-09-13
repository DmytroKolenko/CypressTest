/// <reference types="cypress"/>
import { LoginPage } from "../pages/login_page"

let xyi = new LoginPage()



it('login test', function() {
    cy.log('Login 1st Test starts')
    xyi.navigate('https://trytestingthis.netlify.app/')
    xyi.enterUserName('test')
    xyi.enterPassword('test')
    xyi.clickLogin()
    cy.log('Login 1st Test ends')

})