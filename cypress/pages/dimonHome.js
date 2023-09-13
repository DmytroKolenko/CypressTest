export class DimonHome {

    dimonHome_userName = '.signin-wrapper__container__form__login'
    dimonHome_password = '.signin-wrapper__container__form__password'
    dimonHome_SignInButton = '.signin-wrapper__container__form__btn'
    dimonHome_NextButton = '.signin-wrapper__container__footer-btn'   
  

    navigate(url) {
        cy.visit(url)
    }

    enterUserName(userName) {
        cy.get(this.dimonHome_userName).type(userName)
    }

    enterPassword(password) {
        cy.get(this.dimonHome_password).type(password)
    }

    clickSignIn(){
        cy.get(this.dimonHome_SignInButton).click()
    }

    clickNext(){
        cy.get(this.dimonHome_NextButton).click()
    }

  


}