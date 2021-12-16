function calcularNomero(numero1, operador, numero2) {
    switch (operador) {
        case "+":
            return numero1 + numero2
        case "-":
            return numero1 - numero2
        case "*":
            return numero1 * numero2
        case "/":
            return (numero1 / numero2).toFixed(3)
        default:
            return `o perador utiliado "${operador}" não é suportado`
    }
}
console.log(calcularNomero(2,'a',3))