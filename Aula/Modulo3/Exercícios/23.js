function verAprovado(codigo, nota1, nota2, nota3) {
    let notas = [];
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)
    let mediafinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`o aluno ${codigo} cuja média é ${mediafinal} :${mediafinal < 5 ? "reprovado" : "aprovado"}`)
}
verAprovado(9292, 10, 2, 2)

