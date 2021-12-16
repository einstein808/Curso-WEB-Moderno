function verDiaUtil(dia) {
    switch (dia) {
        case "segunda":
        case "terça feira":
        case "quarta feira":
        case "quinta feira":
        case "sexta feira":
            console.log("dia útil")
            break
        case "sabado":
        case "domingo":
            console.log("não útil")
            break
        default:
            console.log('dia inválido')
    }
}
verDiaUtil("domins")