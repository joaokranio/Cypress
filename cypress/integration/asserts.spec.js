/// <reference types="cypress"/>

it('Equality',()=>{
    const a = 1;

    expect(a).equal(1);
    expect(a,'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.be.equal('b');    
})

it('Truty', ()=>{
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).not.be.null;
    expect(c).to.be.undefined;
})

it('Object equality',()=>{
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.deep.equal({a:1,b:2}); //deep verifica as propriedades do objeto para defini equidade
    expect(obj).eql({a:1,b:2}); //forma simplificada de verificar equidade entre objetos
    expect(obj).include({b:2}); //verifica se dentro do objeto possui a propriedade selecionada     
    expect(obj).to.have.property('b'); //verificar se tem a propriedade 
    expect(obj).to.have.property('b',2); //verificar se tem a propriedade 
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
})

it('Arrays',()=>{
    const arr = [1,2,3,4];

    expect(arr).to.have.members([1,2,3,4]);
    expect(arr).to.include.members([1,2,3,4]);
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
})

it('Types',()=>{
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number'); //verificar o tipo de váriavel
    expect(str).to.be.a('string'); //verificar o tipo de váriavel
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it('String',()=>{
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de'); //verifica se contem esse valor 
    expect(str).to.match(/^String/); //inicia com isso
    expect(str).to.match(/teste$/); //termina com isso
    expect(str).to.match(/.{15}/); //
    expect(str).to.match(/\w+/); // verificar se só contem letras
    expect(str).to.match(/\D+/); // verificar se não contem nuemros
})

it('Numbers',()=>{
    const number = 4;
    const floatNumber = 5.21;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3); //acima
    expect(number).to.be.below(7); //abaixo
    expect(floatNumber).to.be.equal(5.21); //
    expect(floatNumber).to.be.closeTo(5.19,0.2); //que o nº seja proximo
    expect(floatNumber).to.be.above(5);
    expect(floatNumber).to.be.below(6);
    
})