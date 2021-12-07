function carro(velocidadeMaxima = 200, dellta = 5) {
    //atributo privado.
    let velocidadeAtual = 0
    // método publico.
    this.acelerar = function () {
        if (velocidadeAtual + dellta <= velocidadeMaxima) {
            velocidadeAtual += dellta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico.
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
const ferrari = new carro(350,20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)