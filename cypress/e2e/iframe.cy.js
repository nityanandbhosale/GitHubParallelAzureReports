///<reference types="cypress" />

it('TS01 iframe', function () {
  
    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
       

   cy.get('iframe#frame').then(($iframe)=>{
    let framebody = $iframe.contents().find('body');
    cy.wrap(framebody).as('iframeBody') // Alias for reuse

    // Assert text exists
    cy.get('@iframeBody')
      .contains('WebdriverUniversity.com (Page Object Model)')
      .should('be.visible')
   })
})

it.only('TS02 iframe with plugin', function () {
  // ifrmae plugin: npm install -D cypress-iframe //https://www.npmjs.com/package/cypress-iframe

    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
       
// way 1 
//    cy.iframe('iframe#frame').contains('WebdriverUniversity.com (Page Object Model)')
//    .should('be.visible')

//way 2 
// cy.iframe().contains('WebdriverUniversity.com (Page Object Model)')
// .should('be.visible')

// way 3 
cy.frameLoaded('iframe#frame')
cy.iframe().contains('WebdriverUniversity.com (Page Object Model)')
.should('be.visible')
})