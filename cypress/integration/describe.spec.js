/// <reference types="cypress" />

//comando only faz com que apenas esse teste seja executado
it.only('A externall test...',() =>{

})

//describe cria grupo de testes podende ter grupos dentro de grupos
describe('Should grup test...',()=>{ 
    describe('Should group more specific test..',()=>{
        //skip faz com que o teste não seja executado
        it.skip('A specific test...',() =>{

        })
    })
    it('A internall test...',() =>{

    })    
})