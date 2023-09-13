/// <reference types="cypress"/>
import { DimonHome } from "../pages/dimonHome"

let xyi = new DimonHome()

const url = "";


   

it('login test', function() {
    cy.log('GO to Home Page')
    xyi.navigate('http://127.0.0.1:3000/')
    cy.get('.logo').should('be.visible').should('not.be.disabled')
    cy.get('.header_log-text').should('be.visible').should('not.be.disabled')
    cy.contains('Sign In').should("have.attr", "href", "/SIgnIn").should('be.visible').should('not.be.disabled')
    cy.contains('USD').should("have.attr", "href", "/Usd").should('be.visible').should('not.be.disabled')
    cy.contains('GBP').should("have.attr", "href", "/GBP").should('be.visible').should('not.be.disabled')
    cy.contains('EUR').should("have.attr", "href", "/EUR").should('be.visible').should('not.be.disabled')     
    cy.log('Home Page looks good')

    // fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    // .then(resp => {
    //   return resp.json();
    // })
    // .then(json => {
    //     expect(response.status).to.equal(200)
    //     const ttime = response.body[0].time.updated
    //     expect(ttime).to.equal("rer")
    // });

})  

it("Parsing Simple JSON responce",()=>{        
    cy.request(
    
        { 
                method: 'GET',
                url: "https://api.coindesk.com/v1/bpi/currentprice.json"

               
        })//.debug()
    
    .then((response)=>{
 
        //expect(response.status).to.equal(200)
        const ttime = response.body
        return ttime
        })
         .then((ttime)=>{
           for (let i=0; i<ttime.lenght; i++){}
           expect(ttime.updated).to.equal("Time")
})
        
        // it("Parsing Simple JSON responce",()=>{        
        //     cy.request(
            
        //         { 
        //                 method: 'GET',
        //                 url: "https://fakestoreapi.com/products"
        
                       
        //         })//.debug()
            
        //     .then((response)=>{
         
        //         expect(response.status).to.equal(200)
        //         expect(response.body[0].id).to.deep.equal(1)
        //         //expect(response.body.time).property('updated').to.not.be.oneOf([null, ""])
        //        // expect(response.body).to.have.length.to.not.be.oneOf([null, ""])
        //        // expect(response.body).to.have.property("updated")
        //         })
    })
  