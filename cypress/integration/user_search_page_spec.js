describe('The User Search Page', function() {
  it('successfully hits', function() {
    cy.visit('/') // change URL to match your dev URL
    cy.get('a[href="/users/search"]').click()
    cy.get('#login').type('taro')
    cy.get('button[type=submit]').click()
    cy.contains('taro')
  })
})