function comprarCarros(carro) {
    switch (carro) {
        case "carro hatch":
            console.log('Compra efetuada com sucesso.')
            break
        case 'sedans':
        case 'motocicletas':
        case "caminhonetes":
            console.log('tem certeza que prevere esse modelo?')
            break
        default:
            console.log('nao trabalhamos com esse modelo.')

    }
}
comprarCarros('caminhos')