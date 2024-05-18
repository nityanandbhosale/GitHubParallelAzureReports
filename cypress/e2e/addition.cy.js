///<reference types="cypress" />
// To cheak the ages of some client and ther addition

it('TS01 the addtion value for the table', function () {
    let sum = 0
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#t01').find('tr').each(function (row, index) {
        if (index != 0) {
            // cy.log(row.children().last().text())
            sum = sum + Number(row.children().last().text())
        }
    }).then(function () {
        expect(sum).to.eqls(159)
    })
    //cy.log(sum)

})