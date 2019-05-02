describe('Elevator', () => {
  context('Internal buttons', () => {
    it('should work', () => {
      cy.visit('http://localhost:4200/');
      cy.get('div.elevator').should('have.class', 'floor-0');
      cy.get('div.door').should('have.class', 'closed');
      cy.get('button.external.floor-0.floor-up').click();
      cy.get('div.door').should('have.class', 'opening');
      cy.get('div.door').should('have.class', 'open');
      cy.get('div.door').should('have.class', 'closing');
      cy.get('div.door').should('have.class', 'closed');
      cy.get('div.elevator').should('have.class', 'floor-0');
      cy.get('button.internal.floor-3').click();
      cy.get('div.elevator').should('have.class', 'floor-1');
      cy.get('div.elevator').should('have.class', 'floor-2');
      cy.get('div.elevator').should('have.class', 'floor-3');
      cy.get('div.door').should('have.class', 'opening');
      cy.get('div.door').should('have.class', 'open');
      cy.get('div.door').should('have.class', 'closing');
      cy.get('div.door').should('have.class', 'closed');
    });
  });
  context('External buttons', () => {
    it('should work', () => {
      cy.visit('http://localhost:4200/');
      cy.get('div.elevator').should('have.class', 'floor-0');
      cy.get('div.door').should('have.class', 'closed');
      cy.get('button.external.floor-3.floor-down').click();
      cy.get('div.elevator').should('have.class', 'floor-1');
      cy.get('div.elevator').should('have.class', 'floor-2');
      cy.get('div.elevator').should('have.class', 'floor-3');
      cy.get('div.door').should('have.class', 'opening');
      cy.get('div.door').should('have.class', 'open');
      cy.get('div.door').should('have.class', 'closing');
      cy.get('div.door').should('have.class', 'closed');
    });
  });
});
