describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/') // change URL to match your dev URL
    cy.title().should('include', 'React Enterprize Boilerplate')
  })
})