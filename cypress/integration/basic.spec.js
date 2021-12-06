/// <reference types="cypress" />

describe ('Cypress basics', ()=>{
    it.only ('Should visit a page and assert title',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.pause() //pausa a execução nesse ponto onde apertando o play ele termina a execução e podemos ir executando passo-a-passo. 

        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().should('contain','Campo').debug() //pegar mais detalhes de determinado ponto
        
        cy.title()
            .should('be.equal','Campo de Treinamento')
            .and('contain','Campo')
        
        //TODO imprimir o log no console 
        //TODO escrever o titulo em um campo de teste 
    })

    it('Should find and interact with an  element', ()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value','Obrigado!')
    })
})
