/// <reference types = "Cypress" />

const POM = require('../support/Page_objects/amazonpom.js');

const Amazondata = require('../support/Page_objects/amazondata.js');

var chai = require('chai');


describe('First test', function(){

   
    it('Login and check username',function(){

        cy.visit('https://www.amazon.in')
        cy.get(POM.homepage.signinicon).click()
        cy.wait(15000)
        //cy.get(POM.homepage.emailinput).type(Amazondata.inputdata.username)
        cy.get(POM.homepage.continuebtn).click()
        cy.wait(15000)
        //cy.get(POM.homepage.passwordinput).type(Amazondata.inputdata.password)
        cy.get(POM.homepage.signinbtn).click()
        cy.get(POM.homepage.searchinput).type(Amazondata.inputdata.itemname)
        cy.get(POM.homepage.searchicon).click()
        //cy.get('#search div:nth-child(3) div:nth-child(2) > div h2 > a').invoke('removeAttr', 'target').click()
        cy.get('div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(1) h2 > a').invoke('removeAttr', 'target').click()
        
        //cy.get(POM.homepage.searcheditem).click()
        cy.get(POM.homepage.addtocartbtn).click()
        cy.wait(10000)
        .then(function(){
            cy.get(POM.homepage.carticon).click({force:true});


        })
       
        //cy.get(POM.homepage.skipbtn).click()
        // .then(async function(){
        //    await cy.waitUntil(async function(){

        //         cy.get(POM.homepage.carticon).click({force:true});

        //     }, 10000, 'click the cart icon');
         
        // })
        

        
        
     })//.console.error();
  
});