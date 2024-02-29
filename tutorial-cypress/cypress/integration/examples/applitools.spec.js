Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});
describe('Hello Cypress, This is Applitools', () => {
  it('works', () => {
    cy.visit('https://demo.applitools.com/index_v2.html')
    cy.eyesOpen({
      appName: 'Walmart Feb25 Demo',
      testName: 'Hello'
    });
    //cy.contains('?diff2').click();
    //cy.contains('Click me!').click();
    cy.eyesCheckWindow('Hello');
    cy.eyesClose();
  });
});
