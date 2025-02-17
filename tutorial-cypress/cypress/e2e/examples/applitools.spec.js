Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});
describe('Hello Cypress, This is Applitools', () => {
  it('works', () => {
    cy.visit('https://demo.applitools.com/app.html')
    cy.eyesOpen({
      appName: 'Gregory Jan25',
      testName: 'Hello'
    });
    //cy.contains('?diff2').click();
    //cy.contains('Click me!').click();
    cy.eyesCheckWindow('Hello');
    cy.eyesClose();
  });
});
