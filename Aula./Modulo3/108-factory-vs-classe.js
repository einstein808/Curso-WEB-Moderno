class Pessoa{
    constructor(nome){
        this.nome= nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('japo')
p1.falar()