///<reference types="cypress" />

it('TS01 confirm box alert alerts', function () {
    let sum = 0
    cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
    // when there is Ok button on js confirm box alert , js auto handles those alerts and clicks on OK button.
    cy.get('#button4').click()
    cy.contains('You pressed OK!').should('be.visible')

    //or you can use return true/ false concept to click on OK and Cancel button 
    cy.on('window:confirm', (str) => {
        // rturn false   // clicks on false


        return true// clicks on  Ok button
    })


})

it('TS02 js alert box which need manual iteruption to click ok', function () {
    let sum = 0
    cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
    // when there is Ok button on js confirm box alert , js auto handles those alerts and clicks on OK button.
    cy.get('#button1').click()
    cy.on('window:alert', (str) => {
        expect(str).to.eq('I am an alert box!')
    })
})

it('TS03 js modal popup', function () {
    let sum = 0
    cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
    // when there is Ok button on js confirm box alert , js auto handles those alerts and clicks on OK button.
    cy.get('#button2').click()
    // Check if the modal is visible
    cy.get('#myModal').should('be.visible')

    // Optional: Check modal content
    cy.get('#myModal .modal-body').should('contain', 'inject')

    // Optional: Close the modal (depends on how the modal is structured)
    cy.get('#myModal .close').click() // Assuming there is a close button
    cy.get('#myModal').should('not.be.visible')
})

it('TS04 ajax loader', function () {
    let sum = 0
    cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
    // when there is Ok button on js confirm box alert , js auto handles those alerts and clicks on OK button.
    cy.get('#button3 a').click()

    // Wait for the new page to load - ensure correct URL
    cy.url().should('include', 'Ajax-Loader')

    // Now wait for the loader to disappear and modal (or content) to appear
    // You may need to inspect the actual loader element's behavior
    // Example: wait until modal button becomes visible
    cy.get('#loader', { timeout: 10000 }).should('not.be.visible') // adjust selector based on your actual loader

    // Now interact with modal or whatever content appears
    cy.get('#button1').click() // example: a button to open modal after loader
    cy.get('.modal-content').should('be.visible')

})

it('TS01 confirm box alert alerts with stub', function () {
    let sum = 0
    cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
    // when there is Ok button on js confirm box alert , js auto handles those alerts and clicks on OK button.

    let stub = cy.stub();


    cy.on('window:confirm', stub);

    cy.get('#button4').click().then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(() => {
        return true
    }).then(() => {
        cy.contains('You pressed OK!').should('be.visible')
    })

})