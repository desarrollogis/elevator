describe('Elevator', () => {
  context.only('Internal buttons', () => {
    it('should work', () => {
      cy.visit('http://localhost:4200/');
      cy.get('div.elevator').should('have.class', 'floor-0');
      cy.get('div.door').should('have.class', 'close');
      cy.get('button.floor-0.floor-up').click();
      cy.get('div.door').should('have.class', 'open');
      cy.get('div.door').should('have.class', 'close');
      cy.get('button.internal.floor-3').click();
    });
  });
  context('External buttons', () => {
    it('should work', () => {
      cy.visit('http://localhost:4200/');
      cy.get('div.elevator').should('have.class', 'floor-0');
      cy.get('div.door').should('have.class', 'close');
      cy.get('button.floor-3.floor-down').click();
      cy.get('div.elevator').should('have.class', 'floor-3');
      cy.get('div.door').should('have.class', 'open');
      cy.get('div.door').should('have.class', 'close');
    });
  });
});
