///<reference types="cypress" />

describe('verify the contact sucessful', () => {
    let userdata;
    before(()=>{
        cy.fixture('user').then((data)=>{
            userdata = data
        })
    })
    it('verify th contact us form', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(userdata.firstname)
        cy.get('input[name = "last_name"]').type(userdata.lastname)
        cy.get('input[name = "email"]').type(userdata.email)
        cy.get('textarea[name = "message"]').type(userdata.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
})