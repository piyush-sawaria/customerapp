describe('filter customers', () => {
    it("filter customers by text", () => {
        cy.visit("http://localhost:3000"); // place in address bar
        cy.get('input[placeholder="search by name"]')
            .type("Geller")
            .get('.row').then(rows => {
                expect(rows.length).to.eq(2)
            });
    });
});