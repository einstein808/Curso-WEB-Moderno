function emcontrarNumeropares(inicio, fim){
    let i = inicio;
    let numeroPares =[]
    let numerosImpares =[]
    while (i<=fim){
        if(i%2 ===0){
           numeroPares.push(i)
        } else{
            numerosImpares.push(i)
        }
        i++
    }
    console.log(`nuemro impares ${numerosImpares.length}`)
    console.log(`nuemro pares ${numeroPares.length}`)
    
}
emcontrarNumeropares(1,5)