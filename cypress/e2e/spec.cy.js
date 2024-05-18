///<reference types="cypress" />

describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://example.cypress.io')
  })
  it('passes', () => {
    cy.get('#utilities h2').first().should('contain', 'Commands')
  })
  it('assert the Utilities', () => {
    cy.get('#utilities h2').eq(1).should('contain', 'Utilities')
  })
  it('assert the Cypress API', () => {
    cy.get('#utilities h2').eq(2).should('contain', 'Cypress API')
  })
  it('verify the response of ApI', () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2"
    }).then(function ({ body, status, statusText, headers, requestHeaders, duration }) {
      cy.log(body)
      cy.log(status)
      cy.log(statusText)
      cy.log(headers)
      cy.log(requestHeaders)
      cy.log(duration)

      // expect(duration).to.be.within(50,200)

      expect(body).to.have.keys(['page', 'per_page', 'total', 'total_pages', 'data', 'support'])
      // expect(status).to.eql(200)
      // expect(statusText).to.eq('OK')
      // expect(headers).to.have.property('content-type','application/json; charset=utf-8')

      body.data.forEach(function (element) {
        expect(element).to.have.keys(['id', 'first_name', 'last_name', 'email', 'avatar'])
        expect(element.first_name).not.to.eql(null)
        expect(element.last_name).not.to.eql(null)
        expect(element.email).not.to.eql(null)
        expect(element.id).not.to.eql(null)
        expect(element.avatar
        ).not.to.eql(null)
      });

    })
  })
})