let marcadorPotuacao = "32, 45, 42, 32, 23, 33, 50";
function verpontucao(marcadorPontuacao) {
    let pontuacoes = marcadorPontuacao.split(", ")
    let qntdadeDeQuebraRecord = 0;
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuaca0 = pontuacoes[0]
    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qntdadeDeQuebraRecord++
        } else if (pontuacoes[i] < menorPontuaca0) {
            menorPontuaca0 = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [qntdadeDeQuebraRecord,piorJogo]
}
console.log(verpontucao(marcadorPotuacao))