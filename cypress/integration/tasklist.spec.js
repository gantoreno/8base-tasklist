describe('Tasklist', () => {
  const name = 'Cypress test task';

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('can open the app', () => {
    cy.get('.tasklist-card-section-title').contains('Tasklist');
  });

  it('creates a task', () => {
    cy.get('.tasklist-creator-input').click().type(name);
    cy.get('.tasklist-creator-button').click();

    cy.wait(5000);

    cy.get('.tasklist-item:first').contains(name);
  });

  it('toggles a task', () => {
    cy.get('.tasklist-item:first').contains(name);
    cy.get('.tasklist-item-checkbox:first').click();

    cy.wait(5000);

    cy.get('.tasklist-item-completed:first').contains(name);
  });

  it('deletes a task', () => {
    cy.get('.tasklist-item-completed:first')
      .contains(name)
      .get('.tasklist-item-actions-delete:first')
      .click();

    cy.wait(5000);

    cy.get('.tasklist-item-completed:first').contains(name).should('not.exist');
  });
});
