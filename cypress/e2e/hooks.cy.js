///<reference types="cypress" />

// here we let see about the hooks

describe('verify the hooks functionality',()=>{
    beforeEach(function(){
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('div h2').first().should('be.visible')
    })
    it('verify the login functionality',function(){
        cy.get('#username').type('bhosalenityanand5@gmail.com')
        cy.get('#password').type('Nityanandb@2000')
        cy.get('#rememberme').click()
        cy.get('input[value="Login"]').click()
    })
    it('verify the login functionality',function(){
        cy.get('#username').type('sangram05@gmail.com')
        cy.get('#password').type('Sangram@1850')
        cy.get('#rememberme').click()
        cy.get('input[value="Login"]').click()
    })
    it('verify the login functionality',function(){
        cy.get('#username').type('sangram05@gmail.com')
        cy.get('#password').type('Sangram@1850')
        cy.get('#rememberme').click()
        cy.get('input[value="Login"]').click()
    })
    afterEach(function(){
        cy.contains('Dashboard').should('have.text','Dashboard')
        
    })
    after(function(){
        cy.get('li a').eq(11).click()
    })
})