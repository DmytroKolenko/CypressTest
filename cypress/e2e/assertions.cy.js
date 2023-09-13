/// <reference types="cypress"/>


it('learning assertions', function() {
    cy.visit('https://example.cypress.io/')  
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain', "Button")
    .should('have.class', 'query-btn')
    .should('not.have.class', 'query-btn3')
    .and('be.visible')
    .and('be.enabled')
    .and('not.be.disabled')

    cy.get('#query-btn').invoke('attr', 'class')
    .should('equal', 'query-btn btn btn-primary') // need to take needed attribute from selector

    //explicit
    expect(true).to.be.true

    let neme = 'cypress';
    expect(neme).to.be.equal('cypress')
    expect(neme).to.be.a('string')

    assert.equal(4, 4, 'Not Equal')
    assert.strictEqual('4','4', 'Not stricly Equal')

})