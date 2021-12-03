const pessoa ={
    saudacao:'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
console.falar = pessoa.falar
//falar()// condlito entre paradigmas:funcional e oo
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()