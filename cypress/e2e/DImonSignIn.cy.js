/// <reference types="cypress"/>
import { DimonHome } from "../pages/dimonHome"

let xyi = new DimonHome()

const url = "";


   

it('SignIn test', function() {
    cy.log('GO to SignIn Page')
    xyi.navigate('http://127.0.0.1:3000/')
    cy.get('.SIgnIn').click() 
    xyi.enterUserName('test')
    xyi.enterPassword('test')
    xyi.clickSignIn()
    xyi.clickNext()
    cy.get('.avatar-btn').selectFile('cypress/fixtures/TestFIle.jpg')
    cy.log('SignIn and User Information Page looks good')


        

    })
  