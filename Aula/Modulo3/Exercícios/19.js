function calcularPedido(item, valor, quantidade) {
    switch (item) {
        case 100:
            return `cachoro quente total deu: ${(valor * quantidade).toFixed(2)}`
        case 200:
            return `Hambúrguer Simples total deu: ${(valor * quantidade).toFixed(2)}`
        case 300:
            return `Cheeseburguer total deu: ${(valor * quantidade).toFixed(2)}`
        case 400:
            return `Bauru total deu: ${(valor * quantidade).toFixed(2)}`
        case 500:
            return `Refrigerante deu: ${(valor * quantidade).toFixed(2)}`
        case 600:
            return `Suco deu: ${(valor * quantidade).toFixed(2)}`
            default:
                return 'item inválido'
    }
}
console.log(calcularPedido(200,3.99,3))