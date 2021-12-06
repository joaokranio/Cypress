/// <reference types="Cypress" />

describe('Work with basic elements',()=>{
    //befero executa antes dos testes apenas 1 vez
    //beforeEach executa antes de cada teste
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
    })

    it('Text',()=>{
        
        cy.get('body').should('contain','Cuidado')
        cy.get('span').should('contain','Cuidado')
        cy.get('.facilAchar').should('contain','Cuidado')
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
    })

    it('Links',()=>{
        cy.get('[href="#"]')
            .click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload() //recarregar a pagina
        cy.get('#resultado').should('have.not.text','Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')
    })

    it('TextFields',()=>{
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value','Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('Textarea')
            .should('have.value','Textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('?????')

        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro {selectall}acerto',{delay:100}) //{delay:'tempo'} atrasa a escrita 
            .should('have.value', 'acerto')
    })

    it('RadioButton',()=>{
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']")
            .should('have.length',2)        

    })

    it('Checkbox',()=>{
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get("[name=formComidaFavorita]").click({multiple:true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

    it('Combo',()=>{
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value','2graucomp')

            cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value','1graucomp')
        
        //TODO validar as opçoes do combo 
    })

    it.only('Combo Multiplo',()=>{
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao','Corrida','nada'])

        //TODO Validar opçoes selecionadas do combo multiplo
    })
    
})
