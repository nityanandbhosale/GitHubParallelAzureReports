describe('verify the prise functionality', function () {
    it("TC 03 verify best selllar page first element ", () => {
        cy.visit("https://www.amazon.in/");
        cy.contains('Best Sellers').click()
        cy.get('#zg_banner_text').should('contain', 'Amazon Bestsellers')
    })
})