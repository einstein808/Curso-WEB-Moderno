function bissetos(ano) {

    if (ano % 400 === 0) {
        return `o ${ano} é um ano bixesto.`
    } else if (ano % 100 === 0) {
        return `o ${ano} não é um ano bixesto.`
    } else if (ano % 4 === 0) {
        return `o ${ano} é um ano bixesto.`
    } else {
        return `o ${ano} não é um ano bixesto.`
    }
}
console.log(bissetos(2004))
