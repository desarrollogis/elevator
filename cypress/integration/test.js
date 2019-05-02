describe('Elevator', () => {
  context('External buttons', () => {
    it('should work', () => {
      cy.visit('http://localhost:4200/');
      cy.get('div.door').should('have.class', 'close');
      cy.get('div.floor.floor-3 button').click();
      cy.get('div.elevator').should('have.class', 'floor-3');
      cy.get('div.door').should('have.class', 'open');
      cy.get('div.door').should('have.class', 'close');
    });
  });
});
