describe("delete a customer", () => {
    it("delete a customer on button click", () => {
        cy.visit("http://localhost:3000"); // place in address bar

        cy.get('button').first().click().get('.row').then(rows => {
            expect(rows.length).to.eq(5);
        });
    });
});