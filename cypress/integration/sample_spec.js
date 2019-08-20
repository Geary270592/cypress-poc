/// <reference types="Cypress" />

describe('My First Test', function() {
  it('Navigates through multiple wikipedia pages', function() {
    cy.visit("/Jehan_Buhan")

    cy.contains('1948 Summer Olympics').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/wiki/1948_Summer_Olympics')

    // Get an input, type into it and verify that the value has been updated
    cy.get('#searchInput')
        .type('Feral pig{enter}')

    cy.url().should('inlude', '/wiki/Feral_pig')
  })
})
