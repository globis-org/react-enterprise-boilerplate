// brings type definition from @types/chai
// declare const expect: Chai.ExpectStatic
describe('TypeScript', () => {
  it('tests our example site', () => {
    cy.visit('https://example.cypress.io/');
    cy
      .get('.home-list')
      .contains('Querying')
      .click();
    cy.get('#query-btn').should('contain', 'Button');
  });
});
