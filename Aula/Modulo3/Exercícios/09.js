
function verAprovacao(alunoNotas) {
    let status = "";
    let proximoInterio = Math.ceil(alunoNotas / 5) * 5;
    let notasArredondadas = 0;
    if (alunoNotas < 38) {
        notasArredondadas = alunoNotas;
        status = "reprovado"
    }
    else if (proximoInterio - alunoNotas < 3) {
        notasArredondadas = proximoInterio;
        status = "aprovado"
    } else {
        notasArredondadas = alunoNotas
        status = "aprovado"
    }
    return `Aluno foi ${status} com a nota: ${notasArredondadas}.`

}
console.log(verAprovacao(39))
console.log(verAprovacao(76))
console.log(verAprovacao(37))
console.log(verAprovacao(38))
console.log(verAprovacao(40))