describe('elevator', () => {
  context.only('door', () => {
    it('should be closed before moving', () => {
      cy.visit('http://localhost:4200/');
      cy.get('button.internal.floor--1').click();
      cy.get('button.external.floor-3').click();
      cy.get('div.door').should('have.class', 'closing');
      cy.get('div.door').should('have.class', 'closed');
      cy.get('div.elevator.floor-1').should('exist');
      cy.get('div.elevator').should('have.class', 'floor-3');
    });
  });
});
