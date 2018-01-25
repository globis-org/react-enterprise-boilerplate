describe('The Home Page', () => {
  it('ホームページが表示される', () => {
    cy.visit('/'); // change URL to match your dev URL
    cy.title().should('include', 'React Enterprize Boilerplate');
  });
});
