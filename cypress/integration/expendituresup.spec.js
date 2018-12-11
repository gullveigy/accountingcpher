describe("Manage Expenditures page", () => {
  beforeEach(() => {
    cy.visit("http://exotic-advice.surge.sh");
    cy.get(".nav-item").contains('Manage Expenditures').click();
  });

  it("should only contain original 2 records", () => {
    cy.get('tbody').find('tr').should('have.length', 2);
    cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(5)').should('contain', '4');
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(5)').should('contain', '1.95');
    //cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(5)').should('contain','4');
    //cy.get('tbody').find('tr:nth-child(4)').find('td:nth-child(5)').should('contain','1.95');
  });

  describe("Manage Expenditures page filter Functions", () => {
    it("allows the records can be filtered by payment", () => {
      cy.get('tbody').find('tr').should('have.length', 2);
      cy.get('table').find('th:nth-child(2)').find('input').type('li');
      cy.get('tbody').find('tr').should('have.length', 1);
      cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(5)').should('contain', '1.95');
    });

    it("allows the records can be filtered date", () => {
      cy.get('tbody').find('tr').should('have.length', 2);
      cy.get('table').find('th:nth-child(3)').find('input').type('2018-11');
      cy.get('tbody').find('tr').should('have.length', 2);
      cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(5)').should('contain', '4');
      cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(5)').should('contain', '1.95');
    });

    it("allows the records can be filtered type", () => {
      cy.get('tbody').find('tr').should('have.length', 2);
      cy.get('table').find('th:nth-child(4)').find('input').type('raf');
      cy.get('tbody').find('tr').should('have.length', 1);
      cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(5)').should('contain', '4');
    })

  });
});
