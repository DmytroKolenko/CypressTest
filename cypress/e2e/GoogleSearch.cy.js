/// <reference types="cypress"/>


it('Google Search 1st Test', function() {
    cy.log('Google 1st Test starts')
    cy.visit('https://www.google.com');
    cy.get('.gLFyf').type('cypress{enter}');
    cy.wait(5000);
    cy.contains('Відео').click();
    cy.log('Google 1st Test ends')
});

it('Google Search 2st Test', function() {
    cy.log('Google 2st Test starts')
    cy.visit('https://www.google.com');
    cy.get('.gLFyf').type('cypress{enter}');
    cy.wait(5000);
    cy.contains('Відео').click();
    cy.log('Google 2st Test ends')
});
